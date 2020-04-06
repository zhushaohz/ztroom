// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import ZeitUI from '@zeit-ui/vue'
import '@zeit-ui/vue/dist/zeit-ui.css' // require style
import { install } from '@zeit-ui/vue-icons'
import axios from 'axios'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(axios)
install(Vue)
Vue.use(ZeitUI)
Vue.use(ElementUI)
Vue.http.options.emulateHTTP = true
Vue.http.options.emulateJSON = true

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
