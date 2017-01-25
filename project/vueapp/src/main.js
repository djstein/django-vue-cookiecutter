// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

var VueMaterial = require('vue-material')
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: {
    color: 'green',
    hue: 200
  },
  accent: {
    color: 'blue',
    hue: 500
  },
  warn: {
    color: 'green',
    hue: 200
  },
  background: {
    color: 'white',
    hue: 200
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
