<template>
  <router-view class="main" />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useEventListener } from '@vueuse/core';

onMounted(() => {
  useEventListener('resize', () => {
    document.documentElement.style.setProperty(
      '--page-height',
      `${window.innerHeight}px`
    );
  });
});
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
}
</style>
