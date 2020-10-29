import NewSong from '@/views/NewSong/NewSong'
import Nav from '@/views/Nav/Nav'
import Plist from '@/views/Plist/Plist'
import Rank from '@/views/Rank/Rank'
import Singer from '@/views/Singer/Singer'


const navs = [
  {
    path: "/",
    name: "newsong",
    meta:{
      title:"新歌"
    },
    components: {
      default: NewSong,
      navBar: Nav
    }
  },
  {
    path: "/rank",
    name: "rank",
    meta:{
      title:"排行"
    },
    components: {
      default: Rank,
      navBar: Nav
    }
  },
  {
    path: "/plist",
    name: "plist",
    meta:{
      title:"歌单"
    },
    components: {
      default: Plist,
      navBar: Nav
    }
  },
  {
    path: "/singer",
    name: "singer",
    meta:{
      title:"歌手"
    },
    components: {
      default: Singer,
      navBar: Nav
    }
  }
];
export default navs;