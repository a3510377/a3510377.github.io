<template>
  <BaseSection class="section-repos">
    <div ref="reposEl" class="repos" :class="{ sticky }">
      <GithubRepo v-for="repo in repos" :key="repo.id" :repo-data="repo" />
    </div>
  </BaseSection>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted, reactive } from 'vue';

import GithubRepo from './GithubRepo.vue';
import BaseSection from './BaseSection.vue';
import { getRepos, minimalRepository } from '@/utils/githubRepo';

const data = await getRepos(5, (data) => {
  Object.assign(repos, data);
});
const repos = reactive<minimalRepository[]>(data);
const sticky = ref<boolean>();
const reposEl = ref<HTMLElement>();
const repoLen = computed(() => repos?.length || 0);
const appEl = document.documentElement;

const updateScroll = () => {
  if (!reposEl.value) return;
  const position = appEl.scrollTop - window.innerHeight;

  sticky.value = position < reposEl.value.scrollWidth;
  reposEl.value.scrollTo({ left: position * 1.24 });
};

onMounted(() => addEventListener('scroll', updateScroll));
onUnmounted(() => removeEventListener('scroll', updateScroll));
</script>

<style lang="scss" scoped>
.section-repos {
  display: block;
  height: calc(var(--page-height) * v-bind('repoLen'));
  background-color: #2d2d33;
}

.repos {
  display: flex;
  width: 100%;
  height: var(--page-height);
  overflow-x: hidden;
  user-select: none;
  flex-wrap: nowrap;
  justify-content: unset;

  &.sticky {
    position: sticky;
    top: 0;
    left: 0;
  }

  .repo {
    &:nth-child(2n + 1) {
      background-color: #2f3843;
    }
  }
}
</style>
