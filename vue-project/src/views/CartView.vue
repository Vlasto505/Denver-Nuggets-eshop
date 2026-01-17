<template>
  <div>
    <h2>Cart</h2>

    <p v-if="cartStore.cart.length === 0">
      Košík je prázdny
    </p>

    <ul v-else>
      <li v-for="item in cartStore.cart" :key="item.id">
        {{ item.name }} – {{ item.quantity }}x – {{ item.price }} €

        <button @click="decrease(item.id)">−</button>
        <button @click="increase(item.id)">+</button>
      </li>
    </ul>

    <h3 v-if="cartStore.cart.length">
      Spolu: {{ cartStore.totalPrice.toFixed(2) }} €
    </h3>
  </div>
</template>


<script>
import { useCartStore } from '@/stores/cart'

export default {
  name: 'CartView',
  data() {
    return {
      cartStore: useCartStore()
    }
  },
  methods: {
    increase(id) {
      this.cartStore.increaseQuantity(id)
    },
    decrease(id) {
      this.cartStore.decreaseQuantity(id)
    }
  }
}

</script>
