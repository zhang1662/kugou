<template>
<!-- 歌单 -->
  <div id="con">
  
    <mt-cell
      id="rank"
      :title="item.specialname"
      :ket="item.rankid"
      v-for="item in list"
      class="con_item"
      to="/Search"
      @click.native="add(item.specialname,item.specialid)"
    >
      <img slot="icon" :src="item.imgurl | guolv" width="97" height="97" />
      <span class="bo">
        <img src="/img/icon_music.png" alt />
        {{item.playcount}}
      </span>
      <img src="/img/arrow_icon.png" class=".fl" alt />
    </mt-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    add(a,b) {
      this.$store.commit("Singer", { a,b});
    }
  },
  created() {
    this.$axios.get("/api/plist/index?json=true").then(res => {
    this.list = res.data.plist.list.info;
    });
  }
};
</script>
<style lang="less">
#con {
  margin-top: 4.1rem;
  .bo {
    position: absolute;
    top: 75%;
    left: 36%;
    img {
      width: 0.5rem;
    }
  }
  .con_item {
    .mint-cell-wrapper {
      .mint-cell-title {
        .mint-cell-text {
          position: absolute;
          left: 66%;
          top: 50%;
          transform: translate(-50%, -50%);
          display: inline-block;
          width: 8.4rem;
          font-size: 0.6rem;
          padding-right: 1.4rem;
          box-sizing: border-box;
          line-height: 1rem;
          padding-left: 0;
        }
      }
    }
  }
}
</style>