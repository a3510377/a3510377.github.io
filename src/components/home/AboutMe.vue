<template>
  <BaseSection>
    <div class="tab">
      <h1>About me</h1>
      <div class="content">
        <p>喵~~</p>
        <p>我是一隻在程式海中溺死的猴貓 😣</p>
      </div>
      <ul class="links">
        <li
          v-for="link in links"
          :key="link.title"
          :title="link.title"
          :style="{ backgroundColor: link.color }"
        >
          <a :href="link.url" target="_blank">
            <SvgIcon :name="link.icon" />
            {{ link.title }}
          </a>
        </li>
      </ul>
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
];
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 1rem;
    font-size: 2.5rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
  }

  .links {
    display: flex;
    list-style-type: none;

    li {
      padding: 5px 18px 5px 8px;
      margin: 5px;
      border-radius: 12px;

      a {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
