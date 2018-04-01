import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/index/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/pages/index/components/home.vue')
    }
  ]
})
