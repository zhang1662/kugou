<template>
  <div id="SingList">
    <mt-cell :title="item.singername" v-for="item in list" :key="item.singerid"  :to="'/info/'+ item.singerid" >
      <span></span>
      <img slot="icon" id="Sing" :src="item.imgurl | guolv" width="60" height="60" />
    </mt-cell>
  </div>
</template>

<script>
import Vue from "vue";
import { Cell } from "mint-ui";

Vue.component(Cell.name, Cell);
export default {
  data() {
    return {
      list: []
    };
  },
  async created() {
    let {
      data: {
        singers: { list }
      }
    } = await this.$axios.get(
      "/api/singer/list/" + this.$route.params.id + "?json=true"
    );
    // console.log(list);
    this.list = list.info;
  }
};
</script>
<style lang="less" scoped>
#SingList {
  margin-top: 4.1rem;
  padding-bottom: 4rem;
  #Sing {
    padding: 0.25rem;
    box-sizing: border-box;
  }
}
</style>