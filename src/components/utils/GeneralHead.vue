<template>
  <Head>
    <title>{{ title }}</title>
    <meta property="og:title" :content="title" />
    <meta property="og:site_name" :content="title" />
    <meta property="twitter:title" :content="title" />

    <meta name="description" :content="description" />
    <meta property="og:description" :content="description" />
    <meta property="twitter:description" :content="description" />

    <meta name="keywords" :content="keywords" />

    <meta property="og:image" :content="image" />
    <meta property="og:image:secure_url" :content="image" />
    <meta property="twitter:image" :content="image" />

    <meta name="theme-color" content="#ffffff" />
    <meta property="og:url" content="https://a3510377.github.io/" />
    <meta property="og:type" content="website" />
    <meta property="twitter:card" content="summary_large_image" />

    <meta name="abstract" content="猴貓 ニャー~~" />
    <meta name="subject" content="猴貓 ニャー~~" />
  </Head>
</template>

<script lang="ts" setup>
import { Head } from '@vueuse/head';

const props = defineProps<{
  title?: string;
  pageTitle?: string;
  keywords?: string[];
  description?: string;
  image?: string;
}>();

const pageTitle = props.pageTitle || '';

let _title: string | void = void 0;
if (pageTitle) _title = `猴貓 ニャー~~ | ${pageTitle}`;

const image = props.image || '/favicon/android-chrome-256x256.png';
const keywords =
  props.keywords?.join(',') || '侯寓升,猴貓,猴子,猴子#2027,a3510377';

const description = props.description || '猴子的個人網站-侯寓升';

const title = _title || props.title || '猴貓 ニャー~~';
</script>
