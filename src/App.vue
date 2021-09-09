<template>
  <Header />
  <div class="wrapper">
  <router-view />
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .wrapper {
    flex-grow: 1;
  }
}
</style>
