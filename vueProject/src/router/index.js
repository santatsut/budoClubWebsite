import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import aboutView from '../views/AboutView.vue'
import medlemView from '../views/MedlemView.vue'
import pricesView from '../views/PricesView.vue'
import paymentView from '../views/PaymentView.vue'
import shopView from '../views/ShopView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: aboutView
    },
    {
      path: '/medlem',
      name: 'medlem',
      component: medlemView,
    },
    {
      path: '/logout',
      name: 'logout',
      component: medlemView,
    },
    {
      path: '/prices',
      name: 'prices',
      component: pricesView,
    },
    {
      path: '/payment',
      name: 'payment',
      component: paymentView,
    },
    {
      path: '/shop',
      name: 'shop',
      component: shopView,
    },
  ],
})

export default router
