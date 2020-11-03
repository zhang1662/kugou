<template>
  <div>
    
    <!-- <router-link to="/rank" v-for="(item) in nav" :key="item.name">{{item.name}}</router-link> -->
    <mt-navbar v-model="selected" id="Nav">
      <mt-tab-item
        v-for="(item) in nav"
        :id="item.name"
        :key="item.name"
        @click.native="fn(item)"
      >{{item.meta.title}}</mt-tab-item>
    </mt-navbar>
  </div>
</template>

<script>
import Vue from "vue";
import nav from "../../router/nav.js";
import { Navbar, TabItem } from "mint-ui";

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

export default {
  data() {
    return {
      nav,
      selected: this.$route.name
    };
  },
  methods: {
    fn(item) {
      this.$router.push({ name: item.name });
     this.selected = item.name
          
    }
  }
};
</script>
<style lang="less">
</style>