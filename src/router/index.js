import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hell',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('../views/index/index'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: () => import('../views/sign-up/index')
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: () => import('../views/sign-in/index')
    }
  ]
})
