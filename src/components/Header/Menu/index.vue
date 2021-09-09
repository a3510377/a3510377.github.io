<template>
  <div id="Menu">
    <div class="menuButton">
      <div class="menuStyleButton" @click="menuShowButton">
        <div class="menuStyle"></div>
      </div>
    </div>
    <div class="menuMain flex">
      <ul>
        <li v-for="list in menuData" :key="list">
          <a :href="list.url" v-text="list.name"></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import menuData from "./menu.json";
export default {
  name: "Menu",
  data() {
    return {
      menuData,
    };
  },
  methods: {
    menuShowButton() {
      $("html").toggleClass("openMenu");
    },
    goResize() {
      this.phone = window.innerWidth < 600;
      if (this.phone) {
        $("html").addClass("isPhone");
      } else {
        $("html").removeClass("isPhone");
      }
    },
  },
  mounted() {
    let _ = this;
    $(function () {
      _.goResize();
      $(window).on("resize", _.goResize);
    });
  },
};
</script>

<style lang="scss" scoped>
#Menu {
  .menuButton {
    padding: 0 10px;
    width: 20px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    .menuStyleButton {
      display: block;
      padding: 10px 0;
      .menuStyle {
        position: relative;
        background-color: white;
        width: 20px;
        height: 2px;
        margin: 7px 0;
        &:before,
        &:after {
          position: absolute;
          content: "";
          width: 20px;
          height: 2px;
          transition-duration: 0.4s;
          background-color: white;
        }
        &:before {
          top: -7px;
        }
        &:after {
          top: 7px;
        }
      }
    }
  }
  .menuMain {
    display: flex;
    ul,
    li {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
  }
}
</style>
<style lang="scss">
html {
  &:not(.isPhone) {
    #Menu {
      .menuButton {
        display: none;
      }
    }
  }
  &.isPhone.openMenu {
    #Menu {
      .menuMain {
      }
    }
  }
}
</style>