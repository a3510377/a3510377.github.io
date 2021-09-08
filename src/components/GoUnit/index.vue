<template>
  <slot />
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
  methods: {},
  /*
  [
    {
      "id": "",
    }
  ]
  */
  data() {
    return {
      windowHeight: 0,
    };
  },
  props: {
    units: Array,
  },
  mounted() {
    $(function () {
      $(window).on("resize", function () {
        console.log($(window).height());
      });
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