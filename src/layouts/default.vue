<template>
  <router-view class="main" />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useEventListener } from '@vueuse/core';

onMounted(() => {
  const setStyle = () => {
    document.documentElement.style.setProperty(
      '--page-height',
      `${window.innerHeight}px`
    );
  };
  setStyle();
  useEventListener('resize', setStyle);
});
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
}
</style>
