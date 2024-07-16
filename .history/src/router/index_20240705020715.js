import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Posts from '../../src/components/Posts.vue';
import HelloWorld from '../../src/components/HelloWorld.vue';
import LandingPage from '@/components/LandingPage.vue';
import store from '../store/sr';
import { USER_IS_AUTHENTICATED } from '../store/storeconstants.js';
import Cart from '@/components/Cart.vue';

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
    path: '/cart',
    name: 'cart',
    component: Cart,
    meta: { auth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: HomeView,
    meta: {
      auth: false
    }
  },
  {
    path: '/signup',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      auth: false
    }
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts,
    meta: {
      auth: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (
    to.meta.auth &&
    !store.getters[`auth/${USER_IS_AUTHENTICATED}`]
  ) {
    next('/login');
  } else if (
    !to.meta.auth &&
    store.getters[`auth/${USER_IS_AUTHENTICATED}`]
  ) {
    next('/posts');
  } else {
    next();
  }
});

export default router;
