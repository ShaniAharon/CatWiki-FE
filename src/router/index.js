import { createRouter, createWebHistory } from 'vue-router';
import marketApp from '../views/market-app.vue';
import marketDetails from '../views/market-details.vue';
import marketEdit from '../views/market-edit.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: marketApp,
    },
    {
      path: '/market/edit/:marketId?',
      component: marketEdit,
    },
    {
      path: '/market/:marketId?',
      component: marketDetails,
    },
  ],
});

export default router;
