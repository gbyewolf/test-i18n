import VueI18n from "../lib/vue-i18n.esm.browser.js";

/**
 * 
 * @param {string} lang - language
 * @param {function} ajax - XMLHttpRequest
 * @param {object} vue - vueInstance
 */
export async function fn2(lang,ajax,vue){
    const qq = await ajax(lang)
        .then(res=>{
            vue.data = res.data[0]
            return  new VueI18n({
                locale:lang,
                messages: res.data[0]
            }) 
        })
        .catch(err=>{
            console.log('fn2 error',err);
        })
    vue.$i18n.locale = qq.locale;
    vue.$i18n.setLocaleMessage(qq.locale, qq.messages);
    
    vue.$mount("#app");
}

export function change(lang,ajax,vue) {
    if(vue.$i18n.messages.hasOwnProperty(lang)){
        vue.$i18n.locale = lang;
        lsSetting('set','language',lang)
    }else{
        fn2(lang, ajax, vue);
        lsSetting('set','language',lang)
    }
}

export function lsSetting(method,key,value) {
    switch (method) {
        case 'set':
            window.localStorage.setItem(key, value)
            break;
        case 'get':
            return window.localStorage.getItem(key)
    }
    
} 