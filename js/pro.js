import { Vue, VueI18n, axios } from "../lib/index.js";
import { b } from "../api/b.js";
import {fn2  , change ,lsSetting } from "./fn2.js";
import router from "./route.js";
// import VueRouter from '../lib/vue-router.esm.browser.js'

// console.log(VueRouter);

Vue.use(VueI18n);


const i18n = new VueI18n({});
let vm = new Vue({
  el:'#app',
  i18n,
  router,
  data() {
    return {
      lang: "cn",
      data:{}
    };
  },
  created() {
  },
  mounted() {
      console.log(this.$route);
  },
  methods: {
  },
})
