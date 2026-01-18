<template>
  <div class="payment-page">
    <h2>Payment</h2>

    <!-- ORDER SUMMARY -->
    <div class="summary">
      <h3>Order Summary</h3>

      <div
        v-for="item in cartStore.cart"
        :key="item.id"
        class="summary-item"
      >
        <span>{{ item.name }} × {{ item.quantity }}</span>
        <span>{{ (item.price * item.quantity).toFixed(2) }} €</span>
      </div>

      <div class="summary-total">
        Total: {{ cartStore.totalPrice.toFixed(2) }} €
      </div>
    </div>

    <!-- PAYMENT METHOD -->
    <div class="payment-methods">
      <label>
        <input type="radio" value="card" v-model="method" />
        Pay by card
      </label>

      <label>
        <input type="radio" value="arrival" v-model="method" />
        Pay on arrival
      </label>
    </div>

    <!-- CARD FORM -->
    <div v-if="method === 'card'" class="card-form">
      <input
        placeholder="Card Number"
        v-model="cardNumber"
        @input="formatCardNumber"
        maxlength="19"
      />

      <div class="row">
        <input
          placeholder="MM / YY"
          v-model="expiry"
          @input="formatExpiry"
          maxlength="7"
        />

        <input
          placeholder="CVC"
          v-model="cvc"
          @input="formatCVC"
          maxlength="4"
        />
      </div>
    </div>

    <!-- PAY BUTTON -->
    <button
      class="pay-btn"
      :disabled="!method || loading"
      @click="pay"
    >
      {{ loading ? 'Processing...' : `Pay ${cartStore.totalPrice.toFixed(2)} €` }}
    </button>

    <p v-if="success" class="success">
      ✅ Payment successful! Thank you for your order.
    </p>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cart'

export default {
  name: 'PaymentView',
  data() {
    return {
      method: '',
      success: false,
      loading: false,
      cardNumber: '',
      expiry: '',
      cvc: '',
      cartStore: useCartStore()
    }
  },
  methods: {
    formatCardNumber() {
      let value = this.cardNumber.replace(/\D/g, '')
      value = value.match(/.{1,4}/g)?.join(' ') || ''
      this.cardNumber = value
    },

    formatExpiry() {
      let value = this.expiry.replace(/\D/g, '')
      if (value.length >= 3) {
        value = value.slice(0, 2) + ' / ' + value.slice(2, 4)
      }
      this.expiry = value
    },

    formatCVC() {
      this.cvc = this.cvc.replace(/\D/g, '').slice(0, 4)
    },

    pay() {
      if (this.method === 'card') {
        if (
          this.cardNumber.length < 19 ||
          this.expiry.length < 7 ||
          this.cvc.length < 3
        ) {
          alert('Please enter valid card details')
          return
        }
      }

      this.loading = true

      setTimeout(() => {
        this.loading = false
        this.success = true
        this.cartStore.clearCart()
      }, 1200)
    }
  }
}
</script>

<style scoped>
.payment-page {
  max-width: 600px;
  margin: 40px auto;
  padding: 32px;
}

.summary {
  background: #f7f7f7;
  padding: 20px;
  border-radius: 16px;
  margin-bottom: 24px;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.summary-total {
  font-weight: bold;
  margin-top: 12px;
}

.payment-methods {
  margin-bottom: 20px;
}

.payment-methods label {
  display: block;
  margin-bottom: 10px;
  cursor: pointer;
}

.card-form input {
  width: 100%;
  padding: 12px;
  margin-bottom: 12px;
  font-size: 16px;
  letter-spacing: 1px;
}

.row {
  display: flex;
  gap: 12px;
}

.pay-btn {
  width: 100%;
  padding: 14px;
  background: #0e2240;
  color: white;
  border: none;
  border-radius: 999px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
}

.pay-btn:hover:not(:disabled) {
  background: #fec524;
  color: #0e2240;
}

.pay-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.success {
  margin-top: 20px;
  color: green;
  font-weight: bold;
  text-align: center;
}
</style>
