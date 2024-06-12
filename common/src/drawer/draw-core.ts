interface DrawerOptions {
  backgroundColor: string;
}

function defineOptions(options: DrawerOptions) {
  return {
    ...options,
    backgroundColor: options?.backgroundColor || '#808080',
  };
}

export default class CanvasDrawer {
  private domEl: HTMLElement;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private options: DrawerOptions;
  private img: HTMLImageElement;
  private ratio: number;
  private operation = {
    rotateDeg: 0,
  };
  constructor(el: HTMLElement, options: DrawerOptions) {
    this.domEl = el;
    this.options = defineOptions(options);
    this.initCanvas();
  }

  initCanvas() {
    const { backgroundColor } = this.options;
    this.canvas = document.createElement('canvas');
    const { offsetWidth, offsetHeight } = this.domEl;
    this.canvas.setAttribute('width', offsetWidth + 'px');
    this.canvas.setAttribute('height', offsetHeight + 'px');
    this.domEl.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.ctx.fillStyle = backgroundColor; // 灰色
    this.ctx.fillRect(0, 0, offsetWidth, offsetHeight);
  }

  loadImg(imageUrl: string) {
    if (!imageUrl) {
      console.warn('drawImg param 需要一个图片地址');
      return Promise.reject();
    }
    const promise = new Promise((resolve, reject) => {
      const imageEl = new Image();
      imageEl.onload = (event) => {
        const img = event.target as HTMLImageElement;
        this.drawImg(img);
        resolve(img);
      };

      imageEl.onerror = (event) => {
        console.warn('drawImg error', event);
        reject(event);
      };

      imageEl.src = imageUrl;
    });

    return promise;
  }

  drawImg(img: HTMLImageElement) {
    const { ctx } = this;
    const { offsetWidth, offsetHeight } = this.domEl;
    // 计算图片的宽高比
    this.ratio = Math.min(offsetWidth / img.width, offsetHeight / img.height);

    // 计算图片的新宽高
    const newWidth = img.width * this.ratio;
    const newHeight = img.height * this.ratio;

    // 计算图片的绘制位置,使其居中
    const x = (offsetWidth - newWidth) / 2;
    const y = (offsetHeight - newHeight) / 2;

    // 在 canvas 上绘制图片
    this.img = img;
    ctx.drawImage(img, x, y, newWidth, newHeight);
  }

  unmountCanvas() {
    this.domEl.removeChild(this.canvas);
  }

  rotate(deg = 90, options = { duration: 0.2 }) {
    this.operation.rotateDeg += deg;
    this.canvasRotate(options);
  }

  canvasRotate(options = { duration: 0.2 }) {
    const {
      ctx,
      img,
      ratio,
      operation: { rotateDeg },
    } = this;
    const { width, height } = this.canvas;
    // 计算图片的新宽高
    const newWidth = img.width * ratio;
    const newHeight = img.height * ratio;

    let startTime = 0;

    const { duration } = options;

    function animate(timestamp: number) {
      // 第一次调用时记录开始时间
      if (!startTime) {
        startTime = timestamp;
      }
      // 计算当前时间占动画时长的比例
      const elapsedTime = (timestamp - startTime) / 1000;
      let progress = elapsedTime / duration;
      if (progress > 1) {
        progress = 1;
      }
      const deg = (rotateDeg * progress * Math.PI) / 180;
      // 清空 canvas
      ctx.clearRect(0, 0, width, height);
      // 保存当前的画布状态
      ctx.save();
      // 将画布原点移动到中心
      ctx.translate(width / 2, height / 2);
      // 根据进度旋转画布
      ctx.rotate(deg);
      // 绘制原始画布内容
      ctx.drawImage(img, -newWidth / 2, -newHeight / 2, newWidth, newHeight);
      // 恢复画布状态
      ctx.restore();
      // 请求下一帧
      // 如果动画未结束,请求下一帧
      if (elapsedTime <= duration) {
        requestAnimationFrame(animate);
      }
    }
    requestAnimationFrame(animate);
  }
}
