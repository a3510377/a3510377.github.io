<template>
  <div class="repo language">
    <div class="content">
      <h1 class="name" v-text="repoData.name"></h1>
      <div class="languages">
        <div
          v-for="(num, lang) in repoData.languages"
          :key="lang"
          class="language"
          :style="{ width: `${(num / codeBytes) * 100}%` }"
          :class="{ [fixClass(lang.toString().toLocaleLowerCase())]: true }"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import '@/scss/languages.scss';
import type { minimalRepository } from '@/utils/githubRepo';

// eslint-disable-next-line vue/no-setup-props-destructure
const props = defineProps<{ repoData: minimalRepository }>();

const fixClass = (className: string) => {
  const fix: Record<string, string> = { 'c++': 'cpp', 'c#': 'cs' };

  return (fix?.[className] || className).replace(' ', '-');
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

  .content {
    width: 80%;
    max-width: 800px;
  }

  .name {
    margin-bottom: 10px;
    font-size: 2em;
  }

  .languages {
    display: flex;
    width: 100%;

    .language {
      height: 10px;
      margin-left: 2px;

      &:first-child {
        margin-left: initial;
        border-bottom-left-radius: 20px;
        border-top-left-radius: 20px;
      }

      &:last-child {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
      }
    }
  }
}
</style>
