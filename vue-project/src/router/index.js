import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
import CartView from '@/views/CartView.vue'
import AboutView from '@/views/AboutView.vue'
import CheckoutView from '@/views/CheckoutView.vue'
import PaymentView from '@/views/PaymentView.vue'
import FAQView from '@/views/FAQView.vue'

const router = createRouter({
  history: createWebHistory('/Denver-Nuggets-eshop/'),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: ProductsView },
    { path: '/product/:id', component: ProductDetailView },
    { path: '/cart', component: CartView },
    { path: '/about', component: AboutView },
    { path: '/checkout', component: CheckoutView },
    { path: '/payment', component: PaymentView },
    { path: '/faq', component: FAQView }
  ]
})

export default router
