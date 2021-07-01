import { Vue, VueI18n, axios } from "../lib/index.js";
import { test } from "../api/1.js";
import { b } from "../api/b.js";

// import * as allnum from "./3.js";
import {fn2  , change ,lsSetting } from "./fn2.js";
console.log(test);
Vue.use(VueI18n);
// window.axios = axios
// console.log('Vue',Vue);
// console.log('VueI18n',VueI18n);
// console.log('allnum',allnum);

const i18n = new VueI18n({});
let vm = new Vue({
  i18n,
  data() {
    return {
      lang: "cn",
      data:{}
    };
  },
  created() {
    // this.aaa();
    const lslang = lsSetting('get','language')
    if(lslang) this.lang = lslang
    fn2(this.lang, b, this);
  },
  mounted() {},
  methods: {
    // async aaa() {
    //   const tt = await fn2("cn", test, this);
    //   console.log("tt", tt);
    //   vm.$i18n.locale = tt.locale;
    //   vm.$i18n.setLocaleMessage(tt.locale, tt.messages);
    //   vm.$mount("#app");
    // },
    bbb(lang){
        change(lang, b, this)
    },
  },
})
// .$mount("#app");
