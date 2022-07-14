<template>
  <header>
    <div>
      <img :src="avatarIcon" alt="avatar" class="avatar" />
    </div>
    <h1>
      猴子
      <span>猴貓, monkey-cat</span>
    </h1>
  </header>
</template>

<script lang="ts" setup>
import avatarIcon from '@/assets/images/avatar.png';
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 15px;
  left: 40px;
  z-index: 2;
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;

  .avatar {
    width: 64px;
    height: 64px;
    margin-right: 20px;
    border-radius: 50%;
  }

  span {
    font-size: 12pt;
  }
}
</style>
