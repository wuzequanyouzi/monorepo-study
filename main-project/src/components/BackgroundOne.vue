<template>
  <div class="background-one">
    <img class="background-one__img" src="../assets/background-top.jpg" alt="">
    <div class="background-one__content">
      <div class="background-one__content-left">去水印</div>
      <div class="background-one__content-right">
        <div style="color:red">免费</div>
        <div style="color: #42b983">简洁</div>
        <div style="color: #198061">无广告</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.background-one {
  display: flex;
  width: 100%;
  position: relative;
  &__img {
    width: 100%;
    pointer-events: none;
    user-select: none;
  }
  &__content {
    top: 0;
    width: 65%;
    height: 100%;
    position: absolute;
    display: flex;
    &-left {
      margin-top: 9%;
      margin-left: 5%;
      box-sizing: border-box;
      padding: 0.24rem;
      width: 35%;
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      writing-mode: vertical-lr;
      font-size: 0.6rem;
      color: #AAA;
    }
    
    &-right {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 9%;
      margin-left: 5%;
      box-sizing: border-box;
      width: 35%;
      height: 80%;
      font-size: 0.6rem;
      color: #AAA;
      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30%;
      }
    }
  }
}
</style>