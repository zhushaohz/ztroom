import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import School from '@/components/School'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/school',
      name: 'School',
      component: School
    }
  ]
})
