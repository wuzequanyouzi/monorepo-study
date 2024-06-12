<template>
  <div ref="canvasWrap" class="canvas-wrap"></div>
</template>

<script setup>
import eldenringImg from '../assets/eldenring.jpeg';
import CanvasDrawer from '@monorepo-study/common/src/drawer';
import { ref, onMounted } from 'vue';

const canvasWrap = ref(null);
const drawer = ref();

onMounted(() => {
  console.log(canvasWrap.value);
  drawer.value = new CanvasDrawer(canvasWrap.value);
  drawer.value.loadImg(eldenringImg);
  window.$drawer = drawer.value;
});
</script>

<style lang="scss" scoped>
.canvas-wrap {
  width: 100vw;
  height: 100vh;
}
</style>
