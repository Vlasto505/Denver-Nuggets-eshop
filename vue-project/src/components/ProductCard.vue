<template>
  <div class="product-card" @click="goToDetail">
    <div
      class="product-image"
      :style="{ backgroundImage: `url(${product.image})` }"
    ></div>

    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <p class="price">{{ product.price.toFixed(2) }} €</p>

      <button @click.stop="addToCart">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cart'

export default {
  name: 'ProductCard',
  props: {
    product: Object
  },
  methods: {
    goToDetail() {
      this.$router.push(`/product/${this.product.id}`)
    },
    addToCart() {
      const cartStore = useCartStore()
      cartStore.addToCart(this.product)
    }
  }
}
</script>

<style scoped>
.product-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

/* 🖼️ IMAGE */
.product-image {
  height: 220px;
  background-size: cover;
  background-position: center;
}

/* ℹ️ INFO */
.product-info {
  padding: 16px;
  text-align: center;
}

.product-info h3 {
  font-size: 16px;
  margin-bottom: 8px;
}

.price {
  font-weight: bold;
  margin-bottom: 12px;
}

/* 🛒 BUTTON */
button {
  background: #0e2240;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.2s ease;
}

button:hover {
  background: #fec524;
  color: #0e2240;
}
</style>
