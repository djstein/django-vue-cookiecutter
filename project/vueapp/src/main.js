// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
Vue.use(Axios)

Vue.prototype.$http = Axios

import auth from './auth'

// Vue.http.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('id_token')

// Check the user's auth status when the app starts
auth.checkAuth()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

// var x = Vue.http.get('http://localhost:8000/rest-auth/login/')
// console.log(x)
