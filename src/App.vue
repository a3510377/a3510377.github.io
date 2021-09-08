<template>
  <Header />
  <GoUnit :units="units">
    <div class="wrapper">
      <router-view />
    </div>
  </GoUnit>
  <Footer />
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GoUnit from "@/components/GoUnit";
export default {
  components: {
    Footer,
    Header,
    GoUnit,
  },
  data() {
    return {
      units: [
        {
          id: "awa",
          name: "awa",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
html {
  --html-margin-top: 55px;
  margin-top: var(--html-margin-top) !important;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - var(--html-margin-top, 0px));
  .wrapper {
    flex-grow: 1;
  }
}
</style>
