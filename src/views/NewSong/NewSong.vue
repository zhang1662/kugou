// 新歌
<template>
  <div id="newSong">
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgurl" alt />
      </mt-swipe-item>
    </mt-swipe>

    <mt-cell
      :title="item.filename"
      v-for="item in dataList"
      :key="item.hash"
      @touchstart.native="playSong(item.hash)"
    >
      <img class="imgs" src="/img/download_icon.png" alt />
    </mt-cell>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "mint-ui";
import { Cell } from "mint-ui";

Vue.component(Cell.name, Cell);

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  data() {
    return {
      bannerList: [],
      dataList: []
    };
  },
  methods: {
    playSong(hash) {
      this.$store.commit("getHash", { hash });
    }
  },
  created() {
    this.$axios.get("/api?json=true").then(res => {
      let {
        data: { data, banner }
      } = res;
      this.bannerList = banner;
      this.dataList = data;

      let halist = data.map(item => {
        return item.hash;
      });
      this.$store.commit("hashList", { halist });
      // console.log(halist);
    });
  }
};
</script>
<style lang="less">
#newSong {
  padding-bottom: 82px;
  margin-top: 4.1rem;
  .mint-cell-title {
    .mint-cell-text {
      font-size: 0.5rem;
    }
  }
  .imgs {
    width: 0.6rem;
  }
  .mint-swipe {
    height: 6rem;
    margin: 0.25rem;
    img {
      height: 6rem;
    }
  }
}
</style>