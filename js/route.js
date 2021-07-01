import Vue from '../lib/vue.esm.browser.js'
import VueRouter from '../lib/vue-router.esm.browser.js'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
    },
    {
      path: '/product.html:id',
    },
  ]
  
  const router = new VueRouter({
    mode: 'history',
    routes
  })
  
  export default router