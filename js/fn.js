export default async function fn(lang,ajax){
    const qq = await ajax().then(res=>{
         return  new VueI18n({
            locale:lang,
            messages: res.data[0]
        }); 
    })
    return Promise.resolve(qq)
}