import Vue from 'vue'
import Router from 'vue-router'
import myPhone from '@/components/myPhone'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myPhone',
      component: myPhone
    }
    // {
    //   path: '/macbook',
    //   name: 'myDesktop',
    //   component: myDesktop
    // }
  ]
})
