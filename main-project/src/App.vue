<!--
 * @Author: zequan.wu
 * @Date: 2024-05-07 16:51:06
 * @LastEditors: zequan.wu
 * @LastEditTime: 2024-05-08 10:48:01
 * @FilePath: \monorepo-study\main-project\src\App.vue
 * @Description: 
 * 
-->
<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import { add } from '@monorepo-study/common';
const sum = ref(add(1, 2));
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <span>{{ sum }}</span>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
