import Vue from 'vue';
import VueRouter from 'vue-router'
import store from '../store'

const Home = () => import('../views/home/Home.vue')
const Login = () => import('../views/login/Login.vue')

Vue.use(VueRouter);

const router =  new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
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
// 全局路由守卫
router.beforeEach((to, from, next) => {
  if(to.path == '/login') {
    store.commit('clearToken');
    next();
  }else {
    if(store.state.token) {
      next();
    }else {
      store.dispatch('checkStatus').then(res => {
        next();
      })
    }
  }
})

export default router;