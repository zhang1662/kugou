import Vue from "vue";
import VueRouter from "vue-router";
import nav from "./nav.js";

import Search from "../views/Search/Search.vue";
import navSearch from "../views/navSearch/navSearch.vue";

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
  }
];

const router = new VueRouter({
  routes
});

export default router;
