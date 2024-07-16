import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Success from '../views/Success.vue';
import Error from '../views/Error.vue';
import Posts from '../../src/components/Posts.vue';
import HelloWorld from '../../src/components/HelloWorld.vue';
import LandingPage from '@/components/LandingPage.vue';
import store from '../store/store.js';
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
    path: '/success',
    name: 'success',
    component: Success,
  },
  {
    path: '/error',
    name: 'error',
    component: Error,
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    meta: {
      auth: true
    }
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
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue').catch(err => {
      console.error('Failed to load component', err);
      return ;
    });,
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
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters[`auth/${USER_IS_AUTHENTICATED}`];

  if (to.matched.some(record => record.meta.auth)) {
    if (!isAuthenticated) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => !record.meta.auth)) {
    if (isAuthenticated && to.path === '/login') {
      next('/cart');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
