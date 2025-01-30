<template>
  <div>
    <h1>Scroll Demo</h1>
    <div class="scroll-content">
      <p class="content-text">
        最下部にトップへスクロールするボタンを配置しています。
      </p>
    </div>
    <button @click="scrollToTop" data-test="to-top-button">トップへ</button>
  </div>
</template>

<script setup lang="ts">
const scrollToTop = () => {
  window.scrollTo({ top: 0 });
};
</script>

<style scoped>
.scroll-content {
  height: 1500px;
  background-color: #f0f0f0;
}

.content-text {
  padding: 16px;
}
</style>
