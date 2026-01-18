<template>
  <nav class="navbar">
    <img src="/images/products/logo.png" alt="Nuggets Store Logo" class="logo" />

    <ul class="nav-links">
      <li>
        <RouterLink to="/" exact-active-class="active">Home</RouterLink>
      </li>

      <li>
        <RouterLink to="/products" active-class="active">Products</RouterLink>
      </li>

      <li class="cart-link">
        <RouterLink to="/cart" active-class="active">
          Cart🛒
          <span
            v-if="cartStore.totalItems > 0"
            class="cart-badge"
          >
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
  setup() {
    const cartStore = useCartStore()
    return { cartStore }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background: #0e2240;
  color: white;
}

.logo {
  height: 50px;
}

.nav-links {
  display: flex;
  gap: 24px;
  list-style: none;
}

.nav-links li a {
  color: white;
  text-decoration: none;
}

.nav-links li a.router-link-active {
  border-bottom: 2px solid #fec524;
}

/* 🔴 CART BADGE */
.cart-badge {
  position: absolute;
  top: -8px;
  right: -14px;
  background: #e63946;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 999px;
}
</style>

