import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('../views/index/index.vue')
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: () => import('../views/sign-up/index.vue')
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: () => import('../views/sign-in/index.vue')
    }
  ]
})
