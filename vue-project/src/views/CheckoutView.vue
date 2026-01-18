<template>
  <div class="checkout">
    <h2>Checkout</h2>

    <!-- CART SUMMARY -->
    <div class="summary">
      <h3>Order summary</h3>

      <div
        v-for="item in cartStore.cart"
        :key="item.id"
        class="summary-item"
      >
        <span>{{ item.name }} × {{ item.quantity }}</span>
        <span>{{ (item.price * item.quantity).toFixed(2) }} €</span>
      </div>

      <hr />

      <div class="total">
        <strong>Total:</strong>
        <strong>{{ cartStore.totalPrice.toFixed(2) }} €</strong>
      </div>
    </div>

    <!-- FORM -->
    <form class="form" @submit.prevent="submitOrder">
      <h3>Customer details</h3>

      <input v-model="form.name" required placeholder="Full name" />
      <input v-model="form.email" type="email" required placeholder="Email" />
      <input v-model="form.address" required placeholder="Address" />

      <button type="submit">Place order</button>
    </form>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cart'

export default {
  name: 'CheckoutView',
  data() {
    return {
      cartStore: useCartStore(),
      form: {
        name: '',
        email: '',
        address: ''
      }
    }
  },
  methods: {
    submitOrder() {
      alert('Order placed successfully! ✅')

      this.cartStore.clearCart()
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.checkout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px;
}

.summary,
.form {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.summary-item,
.total {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.total {
  font-size: 18px;
}

input {
  width: 100%;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
}

button {
  width: 100%;
  background: #0e2240;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 999px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background: #fec524;
  color: #0e2240;
}
</style>
