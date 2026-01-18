<template>

  <div v-if="product" class="product-detail-wrapper">
    <!-- BACK BUTTON -->
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

export default {
  name: 'ProductDetailView',
  data() {
    return {
      product: null,
      products: [
        { id: 1, name: 'Nikola Jokic Jersey White', price: 89.99, category: 'jerseys', image: '/images/products/jokic_white.jpg' },
        { id: 2, name: 'Nikola Jokic Jersey City', price: 89.99, category: 'jerseys', image: '/images/products/jokic_city.jpg' },
        { id: 3, name: 'Nikola Jokic Jersey Mile High', price: 99.99, category: 'jerseys', image: '/images/products/jokic_milehigh.jpg' },
        { id: 4, name: 'Jamal Murray Jersey White', price: 89.99, category: 'jerseys', image: '/images/products/murray.jpg'},
        { id: 5, name: 'Jamal Murray Jersey City', price: 89.99, category: 'jerseys', image: '/images/products/murray_city.jpg'},
        { id: 6, name: 'Jamal Murray Jersey Mile High', price: 99.99, category: 'jerseys', image: '/images/products/murray_milehigh.jpg'},
        { id: 7, name: 'Aaron Gordon Jersey White', price: 89.99, category: 'jerseys', image: '/images/products/gordon_white.jpg'},
        { id: 8, name: 'Aaron Gordon Jersey City', price: 89.99, category: 'jerseys', image: '/images/products/gordon_city.jpg'},
        { id: 9, name: 'Aaron Gordon Jersey Mile High', price: 99.99, category: 'jerseys', image: '/images/products/gordon_milehigh.jpg'},
        { id: 10, name: 'Denver Nuggets Cap Blue', price: 19.99, category: 'caps', image: '/images/products/cap_blue.jpg' },
        { id: 11, name: 'Denver Nuggets Cap Snapback', price: 19.99, category: 'caps', image: '/images/products/cap_snapback.jpg' },
        { id: 12, name: 'Denver Nuggets Cap Champions', price: 29.99, category: 'caps', image: '/images/products/cap_champions.jpg' },
        { id: 13, name: 'Denver Nuggets Tribute Basketball', price: 24.99, category: 'basketballs', image: '/images/products/ball_tribute.jpg' },
        { id: 14, name: 'Denver Nuggets Grafiti Basketball', price: 29.99, category: 'basketballs', image: '/images/products/ball_grafiti.jpg' },
        { id: 15, name: 'Denver Nuggets Inflatable Mascot Rocky', price: 169.99, category: 'other', image: '/images/products/rocky.jpg' },
        { id: 16, name: 'Denver Nuggets City Keychain', price: 12.99, category: 'other', image: '/images/products/keychain.jpg' },
        { id: 17, name: 'Denver Nuggets Icon Bench Towel', price: 19.99, category: 'other', image: '/images/products/towel.jpg' },
        { id: 18, name: 'Denver Nuggets License Plate Can Coozie', price: 4.99, category: 'other', image: '/images/products/can.jpg' }
      ]
    }
  },
  created() {
    const productId = Number(this.$route.params.id)
    this.product = this.products.find(p => p.id === productId)
  },
  methods: {
    addToCart() {
      const cartStore = useCartStore()
      cartStore.addToCart(this.product)
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
