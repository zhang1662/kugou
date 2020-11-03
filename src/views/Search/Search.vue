// 歌单
<template>
  <div id="con">
    <div class="topa">
      <img :src="info.imgurl" alt />
      <div class="con">
        <mt-cell
          :title="item.filename"
          v-for="(item,i) in lists"
          :ket="item.hash"
          @touchstart.native="playSong(item.hash)"
        ></mt-cell>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    playSong(hash) {
      this.$store.commit("getHash", { hash });
    }
  },
  data() {
    return {
      lists: [],
      info: {},
      title: ""
    };
  },
  async created() {
    let { data } = await this.$axios.get(
      "/api/plist/list/" + this.$store.state.b + "?json=true"
    );

    this.info = {
      imgurl: data.info.list.imgurl.replace(/{size}/, "400"),
      name: data.info.list.nickname,
      updateTime: data.info.list.publishtime.substring(0, 10)
    };

    this.lists = data.list.list.info.map(item => {
      return {
        hash: item.hash,
        filename: item.filename
      };
    });

    let halist = this.lists.map(item => {
      return item.hash;
    });
    this.$store.commit("hashList", { halist });
  }
};
</script>
<style lang="less">
#con {
  margin-top: 4.1rem;
  padding-bottom: 80px;
  .con {
    margin-top: 375px;
  }
  .topa {
    img {
      width: 380px;
      position: absolute;
      top: -33px;
    }
  }
}
</style>