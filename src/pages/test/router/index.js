import Vue from 'vue'
import Router from 'vue-router'
import TestMo from '@/pages/test/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'testmo',
      component: TestMo
    }
  ]
})
