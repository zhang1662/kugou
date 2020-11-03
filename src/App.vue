<template>
  <div id="app">
    <!-- 头部区域 -->
    <div class="header">
      <!-- 最顶部区域 -->
      <!-- 导航区域 -->

      <mt-header id="top1">
        <router-link to="/" slot="left">
          <mt-button id="logo"></mt-button>
        </router-link>
        <mt-button icon="search" slot="right" class="search" @click.native="gode"></mt-button>
      </mt-header>
      <router-view name="navBar"></router-view>
    </div>
    <!-- 主题区域 -->
    <div class="container">
      <!-- 默认路由试图 -->
      <router-view></router-view>
    </div>
    <!-- 底部 -->
    <pli></pli>
  </div>
</template>
<script>
import Vue from "vue";
import { Header, Button } from "mint-ui";
import pli from "@/components/pli/pli.vue";
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
export default {
  components: {
    pli
  },
  methods: {
    gode(a) {
      this.$router.push({ path: "/search" });
      console.log(111);

      this.$store.commit("Singer", { a: "搜素" });
    }
  },
  created() {},
  data() {
    return {
      selected: "newsong"
    };
  }
};
</script>
<style lang="less">
#app {
  .header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .mintui {
    font-size: 1rem;
  }
  #logo {
    height: 1.2rem;
    width: 5.1rem;
    background: url("/img/logo.png");
    background-size: 100% 100%;
  }
}
</style>
