import Vue from 'vue'
import Router from 'vue-router'
// import header from '@/components/header/header.vue'
import goods from '@/components/goods/goods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goods',
      component: goods
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    }
  ]
})
