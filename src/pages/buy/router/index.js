import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: () => import('@buy/components/HomePage.vue')
    },
    {
      path: '/with-router',
      name: 'with-router',
      component: () => import('@buy/components/WithRouter.vue')
    }
  ]
})
