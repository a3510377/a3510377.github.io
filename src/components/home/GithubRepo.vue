<template>
  <div class="repo language">
    <h1 v-text="repoData.name"></h1>
    <div v-for="(value, key) in repoData.languages" :key="value">
      {{ key }}: {{ value }}
    </div>
    <div class="languages">
      <div class="language python"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import '@/scss/languages.scss';
import type { minimalRepository } from '@/utils/githubRepo';

// eslint-disable-next-line vue/no-setup-props-destructure
defineProps<{ repoData: minimalRepository }>();
</script>

<style lang="scss" scoped>
.repo {
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
