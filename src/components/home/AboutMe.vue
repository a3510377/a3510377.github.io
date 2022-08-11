<template>
  <BaseSection class="section-about">
    <div class="tab">
      <h1>About me</h1>
      <div class="content">
        <p>喵~~</p>
        <p>我是一隻在程式海中溺死的猴貓 😣</p>
      </div>
      <div class="links">
        <a
          v-for="link in links"
          v-once
          :key="link.title"
          :href="link.url"
          :title="`${link.icon}: ${link.title}`"
          :style="{ backgroundColor: link.color }"
          target="_blank"
        >
          <SvgIcon :name="link.icon" />
          <p v-text="link.title" />
        </a>
      </div>
    </div>
  </BaseSection>
</template>

<script lang="ts" setup>
import BaseSection from './BaseSection.vue';

interface linkType {
  color: string;
  icon: string;
  title: string;
  url: string;
}
const links: linkType[] = [
  {
    color: '#004daa',
    icon: 'discord',
    title: '猴子#2027',
    url: 'https://discord.com/users/688181698822799414',
  },
  {
    color: 'black',
    icon: 'github',
    title: 'a3510377',
    url: 'https://github.com/a3510377',
  },
  {
    color: '#004daa',
    title: '@Bod31444120',
    icon: 'twitter',
    url: 'https://twitter.com/Bod31444120',
  },
  {
    color: 'black',
    title: '侯寓升',
    icon: 'facebook',
    url: 'https://www.facebook.com/profile.php?id=100028122045493',
  },
];
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  width: 80%;
  max-width: 800px;
  min-height: 300px;
  padding: 20px 0;
  color: black;
  background-color: #ababab;
  border-radius: 12px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    text-align: center;
  }

  .links {
    display: flex;
    width: 600px;
    align-items: center;

    a {
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
      padding: 5px 18px 5px 8px;
      margin: 5px;
      border-radius: 12px;
      align-items: center;

      p {
        margin-left: 10px;
      }

      &:hover {
        opacity: 0.88;
      }
    }
    @media all and (max-width: 830px) {
      flex-direction: column;
      width: auto;
    }
  }
}
</style>
