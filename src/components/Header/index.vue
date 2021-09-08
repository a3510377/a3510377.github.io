<template>
  <div class="Header">
    <div class="Header-user flex flex-item-center">
      <img
        src="https://cdn.discordapp.com/avatars/688181698822799414/f6534feffc3f15cf439cb2fdd579aab5.webp?size=128"
      />
      <div class="my-name">awa</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.Header {
  display: none;
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  .Header-user {
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    .my-name {
      font-size: 30pt;
    }
  }
}
</style>