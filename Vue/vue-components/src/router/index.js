import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '@/components/pages/A'
import parent from '@/components/views/parent'
import show from '@/components/form/show.vue'
import Display from '@/components/Display'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Display',
      component: Display
    }
  ]
})
