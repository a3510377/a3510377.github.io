<template>
  <div class="repo language">
    <a class="content" :href="repoData.html_url" target="_blank">
      <h1 class="name" v-text="repoData.name" />
      <p
        class="description"
        v-text="repoData.description || 'No description'"
      />
      <div class="count">
        <a class="base-language">
          <SvgIcon name="code" size="25px" color="white" />
          <span v-text="repoData.language" />
        </a>
        <div class="star">
          <SvgIcon name="star" size="25px" color="white" />
          <span v-text="repoData.stargazers_count" />
        </div>
        <div class="fork">
          <SvgIcon name="fork" size="25px" color="white" />
          <span v-text="repoData.forks_count" />
        </div>
      </div>
      <div class="languages">
        <div
          v-for="(num, lang) in repoData.languages"
          :key="lang"
          class="language"
          :style="{ width: `${(num / codeBytes) * 100}%` }"
          :class="{ [fixClass(lang.toString().toLocaleLowerCase())]: true }"
        />
      </div>
    </a>
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
    padding: 20px;
    background-color: #202324;
    border-radius: 10px;
  }

  .name {
    margin-bottom: 15px;
    font-size: 2em;
  }

  .description {
    margin-bottom: 20px;
    font-size: 1.2em;
  }

  .count {
    display: flex;
    margin-bottom: 20px;

    > * {
      display: flex;
      align-items: center;

      svg {
        margin-right: 4px;
      }

      &:not(:first-child) {
        margin-left: 10px;
      }
    }
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
