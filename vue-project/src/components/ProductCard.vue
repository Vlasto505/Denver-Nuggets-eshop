<template>
  <div class="card">
    <img :src="product.image" alt="product image" />
    <h3>{{ product.name }}</h3>
    <p class="price">{{ product.price }} €</p>

    <button @click="addToCart">
      Pridať do košíka
    </button>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cart'

export default {
  name: 'ProductCard',
  props: {
    product: Object
  },
  data() {
    return {
      cartStore: useCartStore()
    }
  },
  methods: {
    addToCart() {
      this.cartStore.addToCart(this.product)
    }
  }
}

</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 16px;
  width: 200px;
}

.card img {
  width: 100%;
}

.price {
  font-weight: bold;
}
</style>
