<template>
  <router-view class="main" />
</template>

<script lang="ts" setup>
import { onUnmounted, onMounted } from 'vue';

const setStyles = () =>
  document.documentElement.style.setProperty(
    '--page-height',
    `${window.innerHeight}px`
  );

addEventListener('resize', setStyles);
onMounted(setStyles);
onUnmounted(() => removeEventListener('resize', setStyles));
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
}
</style>
