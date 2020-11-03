<template>
  <div id="info">
    <img :src="info.img" alt />
    <div class="singername">{{info.name}}</div>
    <!-- 歌曲 -->
    <div>
      <mt-cell
        :title="item.filename"
        v-for="(item,i) in list"
        :ket="item.hash"
        @touchstart.native="playSong(item.hash)"
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
      list: [],
      info: {},
      img: "",
      names: ""
    };
  },
  methods: {
    playSong(hash) {
      this.$store.commit("getHash", { hash });
      console.log("1111");
    }
  },
  async created() {
    let { data } = await this.$axios.get(
      "/api/singer/info/" + this.$route.params.id + "?json=true"
    );
    this.info = {
      img: data.info.imgurl.replace(/{size}/, "400"),
      name: data.info.singername,
      id: data.info.singerid
    };
    this.list = data.songs.list.map(item => {
      return {
        filename: item.filename,
        hash: item.hash
      };
    });
  }
};
</script>
<style lang="less" scoped>
#info {
  position: absolute;
  top: 0;
  z-index: 10;
  padding-bottom: 80px;
  img {
    width: 16rem;
    height: 12rem;
  }
  .singername {
    position: absolute;
    top: 50px;
    left: 20px;
    font-size: 20px;
    color: white;
    font-weight: bold;
  }
}
</style>