import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import School from '@/components/School'
import Signup from '@/components/Signup'
import Login from '@/components/Login'
import User from '@/components/User'
import Help from '@/components/Help'
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
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    }
  ]
})
