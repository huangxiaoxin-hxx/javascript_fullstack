import Vue from 'vue'
import Router from 'vue-router'
import starNotes from '@/components/starNotes'
import starBanner from '@/components/starBanner/StarBanner'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'starNotes',
      component: starNotes,
      meta: {
        title: '星辰笔记'
      }
    },
    {
      path: '/StarBanner',
      name: 'StarBanner',
      component: starBanner,
      meta: {
        title: '欢迎'
      }
    }
  ]
})
