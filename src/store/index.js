import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Singder: "",
    b: "",
    hash: "", //要播放的hash
    hashList: []
  },
  mutations: {
    Singer(state, { a, b }) {
      state.Singder = a;
      state.b = b;
    },
    getHash(state, { hash }) {
      state.hash = hash;
    },
    hashList(state, { halist }) {
      state.hashList = halist;
    }
  },
  actions: {},
  modules: {}
});
