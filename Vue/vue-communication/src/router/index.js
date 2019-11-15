import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Father1 from '@/components/view/demo1/father'
import Father2 from '@/components/view/demo2/father'
import Father3 from '@/components/view/demo3/father'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/d1',
      name: 'Father1',
      component: Father1
    },
    {
      path: '/d2',
      name: 'Father2',
      component: Father2
    },
    {
      path: '/d3',
      name: 'Father3',
      component: Father3
    }
  ]
})
