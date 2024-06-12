import KoaRouter from '@koa/router';
import { getVideoUrl } from '../utils/parse';

const router = new KoaRouter();

router.get('/', (ctx) => {
  ctx.body = 'Hello Koa!';
});

router.post('/getVideoUrl', async (ctx) => {
  const params = ctx.request?.body || {};
  if (params.url) {
    const videoUrl = await getVideoUrl('https://v.kuaishou.com/zVWCtT');
    ctx.body = {
      code: 0,
      data: {
        videoUrl,
      },
      message: 'success',
    };
  } else {
    ctx.status = 400;
    ctx.body = 'Bad Request';
  }
});

export default router;
