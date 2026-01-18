import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '@/views/ProductsView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
import CartView from '@/views/CartView.vue'
import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import CheckoutView from '@/views/CheckoutView.vue'
import PaymentView from '@/views/PaymentView.vue'
import FAQView from '@/views/FAQView.vue'
const routes = [
  { path: '/', component: HomeView },
  { path: '/', redirect: '/products' },
  { path: '/products', component: ProductsView },
  { path: '/product/:id', component: ProductDetailView }, // tu je detail produktu
  { path: '/cart', component: CartView },
  { path: '/about', component: AboutView },
  { path: '/checkout', component: CheckoutView },
  { path: '/payment', component: PaymentView },
  { path: '/faq', component: FAQView }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
