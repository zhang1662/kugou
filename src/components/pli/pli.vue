<template>
  <div class="pli" v-show=" singName != ''">
    <img class="pli-img" :src="imgurl" alt />
    <audio id="audio" ref="audio1" :src="audurl"></audio>
    <div class="geming">
      <!-- <span>{{filename}}</span> -->
      <p>{{singName}}</p>
      <p>{{songName}}</p>
    </div>
    <div class="img">
      <img src="/img/shang.png" @touchstart="sy()" alt />
      <!-- <p @touchstart="zz" ref="z"> -->
      <img :src="fal?z:b" @touchstart="zz" alt ref="z" />
      <!-- </p> -->
      <img src="/img/xia.png" @touchstart="next()" alt />
      <img src="/img/xiaz.png" alt />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    zz() {
      if (this.fal) {
        this.$refs.audio1.pause();
      } else {
        this.$refs.audio1.play();
      }
      this.fal = !this.fal;
    },
    next() {
      // 根据hash去找到我是第几个歌曲 索引+1 就是下一首歌曲
      let idx = this.hashList.findIndex(item => item === this.hash);
      // 提交给vuex下一首歌曲的hash
      if (idx + 1 <= this.hashList.length - 1) {
        let nextHash = this.hashList[idx + 1];
        this.$store.commit("getHash", { hash: nextHash });
      }
    },
    sy() {
      // 根据hash去找到我是第几个歌曲 索引+1 就是下一首歌曲
      let idx = this.hashList.findIndex(item => item === this.hash);
      // 提交给vuex下一首歌曲的hash
      if (idx > 0) {
        let nextHash = this.hashList[idx - 1];
        this.$store.commit("getHash", { hash: nextHash });
      }
    }
  },
  data() {
    return {
      z: "/img/zan.png",
      fal: true,
      imgurl: "",
      audurl: "", //音乐的url
      songName: "",
      singName: "",
      b: "/img/xia.png"
      // hash:""
    };
  },
  computed: {
    ...mapState(["hash", "hashList"])
  },
  watch: {
    hash: {
      handler: async function() {
        // console.log(this.hash);
        let { data } = await this.$axios.get("api/v1/song/get_song_info", {
          params: {
            cmd: "playInfo",
            hash: this.hash
          }
        });
        // console.log(data);
        this.imgurl = data.imgUrl.replace(/{size}/, "400");
        this.audurl = data.url;
        this.singName = data.singerName;
        this.songName = data.songName;
        console.log(data);

        //  paused
        let than = this;
        this.$refs.audio1.addEventListener("loadeddata", function() {
          this.play();
          than.fal = true;
        });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.pli {
  color: white;
  width: 100%;
  height: 80px;
  background: rgba(62, 62, 71, 0.5);
  position: fixed;
  bottom: 0;
  z-index: 10;
  .geming {
    width: 100px;
    height: 40px;
    overflow: hidden;
    position: fixed;
    bottom: 20px;
    left: 80px;
    font-size: 0.6rem;
  }
  .pli-img {
    margin: 10px;
    width: 60px;
    height: 60px;
  }
  .img {
    position: fixed;
    right: 20px;
    bottom: 16px;
    img {
      width: 0.8rem;
      margin: 0.5rem;
    }
  }
}
</style>