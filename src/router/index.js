import Vue from 'vue'
import Router from 'vue-router'
import Tos from '@/components/Tos'
import Login from '@/components/Login'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', component: Tos
    },
    {
      path: '/login', component: Login
    },
    {
      path: '/form', component: Form
    }
  ]
})
