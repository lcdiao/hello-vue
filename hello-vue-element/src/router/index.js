import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/views/Main'
import Login from '@/views/Login'

import UserAdd from '@/views/user/Add'
import UserList from '@/views/user/List'

import NotFount from '@/views/404'
Vue.use(Router);

export default new Router({
  //mode: 'history',
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'Main',
      path: '/main',
      component: Main,
      children: [
        {name: 'UserAdd',path: '/user/add/:id', component: UserAdd},
        {name: 'UserList',path: '/user/list/:id', component: UserList, props: true}
      ]
    },
    {
      path: '/home',
      redirect: '/main'
    },
    {
      path: '*',
      component: NotFount
    }
  ]
})
