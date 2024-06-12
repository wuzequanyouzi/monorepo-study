<script setup lang="ts">
import { ref } from 'vue';
import { Field } from 'vant';
import 'vant/es/field/index.css';
import BackgroundOne from '../../components/BackgroundOne.vue';

// TODO： 解析之后，启用无头浏览器，访问页面，然后检索video src 返回
const url = ref('');
</script>

<template>
  <BackgroundOne />
  <div class="home-container">
    <div class="field-input"><Field style="width: 90%" size="large" label="" v-model="url" /></div>
  </div>
</template>

<style scoped lang="scss">
.logo {
  height: 2rem;
  padding: 0.5rem;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.home-container {
  height: 60%;
  background-color: #eee;
  padding: 0.24rem;
  .field-input {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0.64rem;
    background-color: red;
    border-radius: 0.48rem;
    padding: 0.08rem 0;
  }
}
</style>
