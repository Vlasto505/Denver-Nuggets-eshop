<template>
  <div class="cart-page">
    <h2>Your cart 🛒</h2>

    <p v-if="cartStore.cart.length === 0" class="empty">
      The cart is currently empty 🛒
    </p>

    <ul v-else class="cart-list">
      <CartItem
        v-for="item in cartStore.cart"
        :key="item.id"
        :item="item"
        @update-quantity="updateQuantity"
        @remove="remove"
      />
    </ul>

    <div v-if="cartStore.cart.length" class="cart-footer">
      <h3>Spolu: {{ cartStore.totalPrice.toFixed(2) }} €</h3>
      <BaseButton class="clear-btn" @click="clearCart">
        Vyprázdni košík
      </BaseButton>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cart'
import CartItem from '@/components/CartItem.vue'
import BaseButton from '@/components/BaseButton.vue'

export default {
  name: 'CartView',
  components: { CartItem, BaseButton },
  data() {
    return {
      cartStore: useCartStore()
    }
  },
  methods: {
    updateQuantity({ id, quantity }) {
      this.cartStore.updateQuantity(id, quantity)
    },
    remove(id) {
      this.cartStore.removeProduct(id)
    },
    clearCart() {
      this.cartStore.clearCart()
    }
  }
}
</script>

<style scoped>
.cart-page {
  padding: 32px;
  max-width: 900px;
  margin: 0 auto;
}

h2 {
  font-size: 28px;
  margin-bottom: 24px;
}

.empty {
  font-size: 18px;
  text-align: center;
  color: #555;
}

.cart-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cart-footer {
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.clear-btn {
  background: #e53935;
  color: white;
  padding: 10px 24px;
  border-radius: 999px;
}

.clear-btn:hover {
  background: #b71c1c;
}
</style>
