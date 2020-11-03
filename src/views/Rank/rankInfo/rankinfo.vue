<template>
  <!-- 排行里面的每一项 -->
  <div id="info">
    <img :src="info.imgurl" alt />
    <span>上次更新时间: {{info.updateTime}}</span>
    <div class="con">
      <mt-cell
        :title="item.filename"
        v-for="(item,i) in lists"
        @touchstart.native="playSong(item.hash)"
        :ket="item.hash"
      ></mt-cell>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Cell } from "mint-ui";

Vue.component(Cell.name, Cell);
export default {
  data() {
    return {
      lists: [],
      info: {}
    };
  },
  methods: {
    playSong(hash) {
      this.$store.commit("getHash", { hash });
    }
  },
  async created() {
    let { data } = await this.$axios.get(
      "/api/rank/info/" + this.$store.state.b + "?json=true"
    );

    this.info = {
      imgurl: data.info.imgurl.replace(/{size}/, "400"),
      name: data.info.rankname
    };

    let halist = data.songs.list.map(item => {
      return item.hash;
    });
    this.$store.commit("hashList", { halist });

    this.lists = data.songs.list.map((item, i) => {
      if (i == 0) {
        this.info.updateTime = item.addtime.substring(0, 10);
      }
      return {
        hash: item.hash,
        filename: item.filename
      };
    });
    console.log(this.lists[1].filename);
  }
};
</script>
<style lang="less" scoped>
#info {
  margin-top: 4.2rem;
  .con {
    margin-top: 288px;
  }
  img {
    width: 375px;
    height: 11.25rem;
    position: absolute;
    top: 38px;
    left: 0;
  }
  span {
    position: absolute;
    top: 248px;
    left: 20px;
    color: white;
    font-size: 0.7rem;
  }
}
</style>