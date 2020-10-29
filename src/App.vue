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
  </div>
</template>
<script>
import Vue from "vue";
import { Header, Button } from "mint-ui";
Vue.component(Header.name, Header);
// import { Button } from 'mint-ui';


Vue.component(Button.name, Button);
export default {
  methods: {
    gode(){
      this.$router.push({'path':'/search'})
    }
  },
  created() {
    // this.$axios.get("/api/?json=true").then(data => {
    //   console.log(data);
    // });
  },
  data() {
    return {
      selected: 1
    };
  }
};
</script>
<style lang="less">
#app {
  .mint-navbar{
    margin-top: 2rem;
  }
  #top1{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
  }
  .mintui {
    font-size: 1rem;
  }
  #logo {
    height: 1.2rem;
    width: 5.1rem;
    background: url("./assets/img/logo.png");
    background-size: 100% 100%;
  }
}
</style>
