// 歌手
<template>
  <div id="con">
    <mt-cell
      :title="item.classname"
      v-for="(item,i) in list"
      :key="item.classid"
      :to="'/singer/list/'+ item.classid"
      is-link
      @click.native="fn(item.classname)"
      :class="[{'margin2': fn1(item.classname,i)}, {'margin1':!fn1(item.classname,i)} ]"
    ></mt-cell>
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
      data: { list }
    } = await this.$axios.get("/api/singer/class?json=true");
    this.list = list;    
  },
  methods: {
    fn(a) {
      this.$store.commit("Singer", { a });
    },
    fn1(name, i) {
      if (
        i > 0 &&
        this.list[i - 1].classname.includes(name.substring(0, 2))
      ) {
        // 当前的歌曲名称 和 前一个歌曲名称重复了
        return true;
      } else {
        // 没重复
        return false;
      }
    }
  }
};
</script>
<style lang="less" scope>
#con {
  margin-top: 4.1rem;
  .mint-cell {
    margin: 1rem;
    background: #f1f1f1;
    border-radius: 0.3rem;
    border: 1px solid #ccc;
  }
  .margin1 {
    margin: 0.5rem 0.5rem 0;
  }
  .margin2 {
    margin: 0 0.5rem;
    border-top: none;
  }
}
</style>