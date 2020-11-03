<template >
  <!-- 搜索 -->
  <div id="top2">
    <mt-header :title="$store.state.Singder" :style="{'color':$route.name==='rankinfo'?'white':'#333'}" >
      <span @click="$router.go(-1)" slot="left" >
        <mt-button icon="back" ></mt-button>
      </span>
    </mt-header>
  </div>
</template>

<script>
import Vue from "vue";
import { Header } from "mint-ui";
Vue.component(Header.name, Header);

export default {
  computed: {
    ff() {
      return this.$store.state.Singder;
    }
  }
};
</script>
<style lang="less" scoped>
#top2 {
  // margin-top: 2rem;
  .mint-header {
    background: transparent;
  }
}
</style>