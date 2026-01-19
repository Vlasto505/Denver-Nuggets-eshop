<template>
  <div class="payment-page">
    <h2>Payment</h2>

    <!-- CUSTOMER INFO -->
    <div class="customer-info">
      <h3>Customer Information</h3>

      <input
        type="text"
        placeholder="Full Name"
        v-model="customer.name"
      />

      <input
        type="email"
        placeholder="Email"
        v-model="customer.email"
        :class="{ invalid: customer.email && !isEmailValid }"
      />
      <small v-if="customer.email && !isEmailValid" class="error-msg">
        Invalid email address
      </small>

      <input
        type="tel"
        placeholder="Phone Number"
        v-model="customer.phone"
        :class="{ invalid: customer.phone && !isPhoneValid }"
      />
      <small v-if="customer.phone && !isPhoneValid" class="error-msg">
        Invalid phone number
      </small>

      <input
        type="text"
        placeholder="Address"
        v-model="customer.address"
      />
    </div>

    <!-- ORDER SUMMARY -->
    <div class="summary">
      <h3>Order Summary</h3>
      <div v-for="item in cartStore.cart" :key="item.id" class="summary-item">
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
    <v-btn
      color="primary"
      size="large"
      block
      :loading="loading"
      :disabled="!method || !isCustomerInfoValid || !isEmailValid || !isPhoneValid"
      @click="pay"
    >
      Pay {{ cartStore.totalPrice.toFixed(2) }} €
    </v-btn>

    <!-- SUCCESS ALERT -->
    <v-alert v-if="success" type="success" variant="tonal" class="mt-4">
      Payment successful! Thank you for your order.
    </v-alert>
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
      cartStore: useCartStore(),
      customer: {
        name: '',
        email: '',
        phone: '',
        address: ''
      }
    }
  },
  computed: {
    isEmailValid() {
      // jednoduchý regex pre email
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return re.test(this.customer.email)
    },
    isPhoneValid() {
      // čísla a +, min 9 znakov
      const re = /^[\d+]{9,15}$/
      return re.test(this.customer.phone.replace(/\s+/g, ''))
    },
    isCustomerInfoValid() {
      return (
        this.customer.name &&
        this.customer.email &&
        this.customer.phone &&
        this.customer.address
      )
    }
  },
  methods: {
    formatCardNumber() {
      let value = this.cardNumber.replace(/\D/g, '')
      this.cardNumber = value.match(/.{1,4}/g)?.join(' ') || ''
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
      if (!this.isCustomerInfoValid) {
        alert('Please fill in all customer information')
        return
      }

      if (!this.isEmailValid || !this.isPhoneValid) {
        alert('Please enter valid email and phone number')
        return
      }

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

.customer-info {
  background: #f2f2f2;
  padding: 20px;
  border-radius: 16px;
  margin-bottom: 24px;
}

.customer-info input {
  width: 100%;
  padding: 12px;
  margin-bottom: 12px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.customer-info input.invalid {
  border-color: #e63946;
}

.error-msg {
  color: #e63946;
  font-size: 12px;
  margin-top: -8px;
  margin-bottom: 8px;
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
</style>
