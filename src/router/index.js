import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import AuthGuard from './auth-guard'
import Login from '@/components/Login'
import Hello from '@/components/Hello'
import Register from '@/components/Register'
import SuccessRegister from '@/components/SuccessRegister'
import allProduct from '@/components/allProduct'
import addProduct from '@/components/addProduct'
import shoppingCart from '@/components/shoppingcart'
import product from '@/components/product'



Vue.use(Router)



 
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Hello
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/successRegister',
      name: 'successRegister',
      component: SuccessRegister
    },
    {
    path: '/allProduct',
    name: 'allProduct',
    component: allProduct

    },
    {
    path: '/addProduct',
    name: 'addProduct',
    component: addProduct,
    beforeEnter: AuthGuard
    },
    {
    path: '/shoppingcart',
    component: shoppingCart,
    beforeEnter: AuthGuard
    },
    {
      path: '/product/:id',
      component: product
    },
  ],
  mode: 'history'
})
