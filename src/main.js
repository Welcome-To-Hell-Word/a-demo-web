// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

let axios = require('axios')

/** 举个栗子 /user/sign-in **/

// axios.defaults.baseURL = 'http://127.0.0.1:10001/master-spark/module'
/** Request URL: http://127.0.0.1:10001/master-spark/module/user/sign-in **/

axios.defaults.baseURL = '/ok'
/** Request URL: http://127.0.0.1:40404/ok/user/sign-in **/

Vue.prototype.$axios = axios

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.user.username) {
      next()
    } else {
      next({
        path: 'sign-in',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
