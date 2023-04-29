import { createWebHistory, createRouter } from 'vue-router';

// eslint-disable-next-line import/no-unresolved
import MainPage from '@/views/MainPage.vue';
// eslint-disable-next-line import/no-unresolved
import SignIn from '@/views/SignIn.vue';

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
