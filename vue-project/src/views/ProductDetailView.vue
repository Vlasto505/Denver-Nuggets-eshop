<template>

  <div v-if="product" class="product-detail-wrapper">
    <button class="back-button" @click="goBack">
      ← Back to products
    </button>

    <div class="product-detail">
      <div
        class="product-image"
        :style="{ backgroundImage: `url(${product.image})` }"
      ></div>

      <div class="product-info">
        <h2>{{ product.name }}</h2>
        <p class="price">{{ product.price.toFixed(2) }} €</p>
        <p class="description">
          Official Denver Nuggets merchandise.
        </p>

        <button @click="addToCart">
          Add to Cart
        </button>
      </div>
    </div>
  </div>

  <p v-else class="not-found">Product does not exist</p>
</template>


<script>
import { useCartStore } from '@/stores/cart'
import { useProductsStore } from '@/stores/products'

export default {
  name: 'ProductDetailView',

  data() {
    return {
      product: null,
      productsStore: useProductsStore(),
      cartStore: useCartStore()
    }
  },

  created() {
    const productId = Number(this.$route.params.id)
    this.product = this.productsStore.getById(productId)
  },

  methods: {
    addToCart() {
      this.cartStore.addToCart(this.product)
    },
    goBack() {
      this.$router.push('/products')
    }
  }
}
</script>


<style scoped>
.product-detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;
}

.product-detail-wrapper {
  padding: 32px;
}

.back-button {
  background: none;
  border: none;
  color: #0e2240;
  font-size: 14px;
  margin-bottom: 24px;
  cursor: pointer;
}

.back-button:hover {
  text-decoration: underline;
}

/* 🖼️ IMAGE */
.product-image {
  height: 420px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
}

/* ℹ️ INFO */
.product-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-info h2 {
  font-size: 28px;
  margin-bottom: 16px;
}

.price {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 16px;
}

.description {
  margin-bottom: 24px;
  color: #555;
}

/* 🛒 BUTTON */
button {
  width: fit-content;
  background: #0e2240;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 999px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
}

button:hover {
  background: #fec524;
  color: #0e2240;
}

/* ❌ NOT FOUND */
.not-found {
  padding: 40px;
  text-align: center;
  font-size: 20px;
}
</style>
