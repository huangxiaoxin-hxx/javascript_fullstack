import Vue from 'vue'
import Router from 'vue-router'
import starNotes from '@/components/starNotes'
import starBanner from '@/components/starBanner/StarBanner'
import starLogin from '@/components/login/StarLogin'
import starRegister from '@/components/register/StarRegister'

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
    },
    {
      path: '/StarLogin',
      name: 'StarLogin',
      component: starLogin,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/StarRegister',
      name: 'StarRegister',
      component: starRegister,
      meta: {
        title: '注册'
      }
    }
  ]
})
