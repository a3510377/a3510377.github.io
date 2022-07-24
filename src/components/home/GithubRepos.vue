<template>
  <BaseSection
    class="section-repos"
    :style="{ height: `calc(100vh * ${repoLen})` }"
  >
    <div ref="reposEl" class="repos">
      <GithubRepo v-for="repo in repos" :key="repo.id" :repo-data="repo" />
    </div>
  </BaseSection>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, reactive } from 'vue';
import { useEventListener, WindowEventName } from '@vueuse/core';

import GithubRepo from './GithubRepo.vue';
import BaseSection from './BaseSection.vue';
import { getRepos, minimalRepository } from '@/utils/githubRepo';

const data = await getRepos(5, (data) => {
  Object.assign(repos, data);
});
const repos = reactive<minimalRepository[]>(data);
const reposEl = ref<HTMLElement>();
const repoLen = computed(() => repos?.length || 0);

const events: WindowEventName[] = ['scroll', 'resize'];
onMounted(() => {
  const appEl = document.documentElement;

  const updataScroll = () => {
    if (!reposEl.value) return;
    reposEl.value.scrollTo({
      left:
        (window.innerWidth * (appEl.scrollTop - window.innerHeight)) /
        window.innerHeight,
    });
  };

  updataScroll();
  events.forEach((name) => useEventListener(name, updataScroll));
});
</script>

<style lang="scss" scoped>
.section-repos {
  display: block;
  background-color: #2d2d33;
}

.repos {
  position: sticky;
  top: 0;
  display: flex;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  user-select: none;
  flex-wrap: nowrap;
  justify-content: unset;

  .repo {
    &:nth-child(2n + 1) {
      background-color: #2f3843;
    }
  }
}
</style>
