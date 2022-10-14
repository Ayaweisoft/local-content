import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import RegisterView from '../views/RegisterView.vue';
import IndividualView from '../views/Individual.vue';
import CompanyView from '../views/Company.vue';
import DashboardView from '../views/Dashboard.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      children: [
        {
          path: 'individual',
          name: 'individual',
          component: IndividualView,
        },
        {
          path: 'company',
          name: 'company',
          component: CompanyView,
        },
      ]
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
});

export default router;
