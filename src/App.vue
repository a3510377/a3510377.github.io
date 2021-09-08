<template>
  <Header />
  <FullPage :units="units">
    <div class="wrapper">
      <router-view />
      <section id="awa" class="fullPage">
        <h1>awa</h1>
      </section>
      <section id="awa2" class="fullPage">
        <h1>awa2</h1>
      </section>
      <section id="awa3" class="fullPage">
        <h1>awa3</h1>
      </section>
      <section id="awa4" class="fullPage">
        <h1>awa4</h1>
      </section>
      <section id="awa5" class="fullPage">
        <h1>awa5</h1>
      </section>
      <section id="awa6" class="fullPage">
        <h1>awa6</h1>
      </section>
    </div>
  </FullPage>
</template>

<script>
import Header from "@/components/Header";
import FullPage from "@/components/FullPage";
export default {
  components: {
    Header,
    FullPage,
  },
  data() {
    return {
      units: [
        {
          id: "awa",
          name: "awa",
        },
        {
          id: "awa2",
          name: "awa2",
        },
        {
          id: "awa3",
          name: "awa3",
        },
        {
          id: "awa4",
          name: "awa4",
        },
        {
          id: "awa5",
          name: "awa5",
        },
        {
          id: "awa6",
          name: "awa6",
        },
      ],
    };
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
