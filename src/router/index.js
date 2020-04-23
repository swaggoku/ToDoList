import Vue from 'vue';
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Login = () => import('../views/login/Login.vue')

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ],
  mode: 'history'
})