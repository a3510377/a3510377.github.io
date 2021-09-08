<template>
  <slot class="fullPageMain" />
  <div id="GoUnit">
    <div>
      <ul class="list-Mother">
        <li v-for="unit in units" :key="unit">
          <a :href="`#${unit.id}`">
            <span class="tooltip" v-text="unit.name"></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  name: "GoUnit",
  methods: {
    resize() {
      $("html").css("--html-wrapper-height", `${$(window).height()}px`);
    },
  },
  data() {
    return {
      windowHeight: 0,
    };
  },
  props: {
    units: Array,
  },
  mounted() {
    let _ = this;
    $(function () {
      _.resize();
      $(window).on("resize", _.resize);
      // $(window).on("scroll", () => {
      //   console.log("a");
      // });
      for (let i of $(".fullPage"))
        new IntersectionObserver((e) =>
          e.map(
            (e) =>
              e.isIntersecting &&
              (document.location.href = `#${$(e.target).attr("id")}`)
          )
        ).observe(i);
    });
  },
};
</script>

<style lang="scss" scoped>
#GoUnit {
  position: fixed;
  right: 3%;
  top: 50%;
  > div {
    .list-Mother {
      padding: 0;
      margin: 0;

      list-style: none;
      height: 100%;
      li {
        padding: 0;
        margin: 0;
        cursor: pointer;
        a {
          &:after {
            display: block;
            content: "";
            width: 15px;
            height: 15px;
            background-color: white;
            border-radius: 100%;
          }
          .tooltip {
            transition: all 1s ease-in-out;
            line-height: 16px;
            margin: auto;
            display: none;
            width: 15px;
            height: 15px;
            position: absolute;
            left: -200%;
          }
          &:hover .tooltip {
            display: block;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.fullPage {
  width: 100%;
  height: var(--html-wrapper-height, 100%);
}
</style>