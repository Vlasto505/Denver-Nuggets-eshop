<template>
  <nav class="navbar" :class="{ scrolled }">
    <!-- LEFT -->
    <RouterLink to="/" class="brand">
      <img src="/images/products/logo.png" alt="Nuggets Logo" />
      <span>Nuggets Store</span>
    </RouterLink>

    <!-- RIGHT -->
    <ul class="nav-links">
      <li>
        <RouterLink to="/" exact-active-class="active">Home</RouterLink>
      </li>

      <li>
        <RouterLink to="/products" active-class="active">Products</RouterLink>
      </li>

      <li class="cart-link">
        <RouterLink to="/cart" active-class="active">
          🛍️ Cart
          <span v-if="cartStore.totalItems > 0" class="cart-badge">
            {{ cartStore.totalItems }}
          </span>
        </RouterLink>
      </li>

      <li>
        <RouterLink to="/about" active-class="active">About</RouterLink>
      </li>
      
    </ul>
  </nav>
</template>

<script>
import { useCartStore } from '@/stores/cart'

export default {
  name: 'Navbar',
  data() {
    return {
      scrolled: false
    }
  },
  setup() {
    const cartStore = useCartStore()
    return { cartStore }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 40
    }
  }
}
</script>


<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #0e2240;
  padding: 22px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

/* shrink */
.navbar.scrolled {
  padding: 12px 40px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}

/* BRAND */
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  text-decoration: none;
  font-weight: 800;
  font-size: 22px;
}

.brand img {
  height: 42px;
  transition: transform 0.3s ease;
}

.navbar.scrolled .brand img {
  transform: scale(0.9);
}

/* LINKS */
.nav-links {
  display: flex;
  gap: 14px;
  list-style: none;
}

.nav-links a {
  position: relative;
  padding: 8px 18px;
  border-radius: 999px;
  background: rgba(255,255,255,0.08);
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.25s ease;
}

/* hover */
.nav-links a:hover {
  background: rgba(255,255,255,0.18);
  transform: translateY(-2px);
}

/* active */
.nav-links a.active {
  background: #fec524;
  color: #0e2240;
}

/* CART */
.cart-link {
  position: relative;
}

.cart-badge {
  position: absolute;
  top: -6px;
  right: -10px;
  background: #e63946;
  color: white;
  font-size: 11px;
  padding: 3px 7px;
  border-radius: 999px;
}

</style>
