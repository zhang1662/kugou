import Vue from "vue";
import VueRouter from "vue-router";
import nav from "./nav.js";

import Search from "../views/Search/Search.vue";
import navSearch from "../views/navSearch/navSearch.vue";
import SingerList from "../views/Singer/SingerList/SingerList.vue";
import info from "../views/Singer/singer/info.vue";
import rankinfo from "../views/Rank/rankInfo/rankinfo.vue";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const routes = [
  ...nav,
  {
    path: "/search",
    name: "search",
    components: {
      default: Search,
      navBar: navSearch
    }
  },
  {
    path: "/singer/list/:id",
    name: "singerlist",
    components: {
      default: SingerList,
      navBar: navSearch
    }
  },
  {
    path: "/info/:id",
    name: "singerinfo",
    components: {
      default: info
    }
  },
  {
    path: "/rankinfo/:id?",
    name: "rankinfo",
    components:{
      
      default:rankinfo,
      navBar: navSearch
  }
}
];

const router = new VueRouter({
  routes
});

export default router;
