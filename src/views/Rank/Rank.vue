<template>
  <div id="con">
    <mt-cell
      id="rank"
      :title="item.rankname"
      :ket="item.rankid"
      v-for="item in list"
      class="con_item"
      :to="'/rankinfo/'+item.rankid"
      @click.native="add(item.rankname,item.rankid )"
    >
      <img slot="icon" :src="item.imgurl | guolv" width="75" height="75" />
      <img src="/img/arrow_icon.png" class=".fl" alt />
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
        rank: { list }
      }
    } = await this.$axios.get("/api/rank/list?json=true");
    this.list = list;
  },
  methods: {
    add(a, b) {
      this.$store.commit("Singer", { a, b });
    }
  }
};
</script>
<style lang="less" scope>
#con {
  margin-top: 4.5rem;
  img {
    padding: 0.3rem 0;
  }
}
</style>