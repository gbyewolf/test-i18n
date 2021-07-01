import { test } from "../api/1.js";
import fn from "./fn.js";
import sss from "../lib/vue-i18n.esm.js";
console.log(sss);
const i18n = new VueI18n({})
let vm = new Vue({
  i18n,
  data() {
    return {
      list: "123",
      message: "123",
    };
  },
  created() {
  },
  mounted() {
  },
})

async function aaa(){
    const tt = await fn('cn', test);
    console.log('tt',tt);
    vm.$i18n.locale = tt.locale
    vm.$i18n.setLocaleMessage(tt.locale,tt.messages)
    console.log(vm);
    vm.$mount("#app");
 }
 aaa()
