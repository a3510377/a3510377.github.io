<template>
  <GeneralHead />
  <HomeHeader />
  <AboutMe />
  <Suspense>
    <GithubRepos />
  </Suspense>
</template>

<script setup lang="ts">
import HomeHeader from '@/components/home/HomeHeader.vue';
import AboutMe from '@/components/home/AboutMe.vue';
import GithubRepos from '@/components/home/GithubRepos.vue';
</script>
