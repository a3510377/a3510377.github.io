<template>
  <div class="repo language">
    <h1 v-text="repoData.name"></h1>
    <!-- <div v-for="(value, key) in repoData.languages" :key="value">
      {{ key }}: {{ value }}
    </div> -->
    <div class="languages">
      <div
        v-for="(num, lang) in repoData.languages"
        :key="lang"
        class="language"
        :style="{ width: `${((num / codeBytes) * 100).toFixed(2)}%` }"
        :class="{ [fixClass(lang.toString())]: true }"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import '@/scss/languages.scss';
import type { minimalRepository } from '@/utils/githubRepo';

// eslint-disable-next-line vue/no-setup-props-destructure
const props = defineProps<{ repoData: minimalRepository }>();

const fixClass = (className: string) => {
  return className.toLocaleLowerCase().replace('c++', 'cpp').replace(' ', '-');
};

const codeBytes = Object.values(props.repoData.languages).reduce(
  (a, b) => a + b,
  0
);
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
