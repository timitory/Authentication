import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Posts from '../../src/components/Posts.vue'
import HelloWorld from '../../src/components/HelloWorld.vue'
import LandingPage from '@/components/LandingPage.vue'
import store from '../store/store.js'
import {USER_IS_AUTHENTICATED} from '../store/storeconstants.js'

const routes = [
  {
    path: '/',
    name: 'landingpage',
    component: LandingPage
  },
  {
    path: '/home',
    name: 'home',
    component: HelloWorld,
  },
  {
    path: '/login',
    name: 'login',
    component: HomeView,
    meta:{
      auth:false
    }
  },
  {
    path: '/signup',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta:{
      auth:false
    }
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts,
    meta:{
      auth:true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (
      'auth' in to.meta &&
      to.meta.auth &&
      !store.getters[`auth/${USER_IS_AUTHENTICATED}`]
  ) {
      next('/login');
  } else if (
      'auth' in to.meta &&
      !to.meta.auth &&
      store.getters[`auth/${USER_IS_AUTHENTICATED}`]
  ) {
      next('/posts');
  } else {
      next();
  }
});
export default router
