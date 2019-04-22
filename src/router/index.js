import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Register from '../components/Register'
 
Vue.use(VueRouter);
 
const router = new VueRouter({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
  ]
})

export default router