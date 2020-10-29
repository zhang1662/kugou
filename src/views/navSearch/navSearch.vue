<template >
  <div id="top2">
    <mt-header title="搜索">
      <router-link to="/" slot="left">
        <mt-button icon="back" ></mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header } from "mint-ui";
Vue.component(Header.name, Header);

export default {};
</script>
<style lang="less" scoped>
#top2 {
  margin-top: 2rem;
  .mint-header{
    background: white;
    color: black;
  }
}
</style>