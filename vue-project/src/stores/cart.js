import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: JSON.parse(localStorage.getItem('cart')) || []
  }),

  actions: {
    addToCart(product) {
      const item = this.cart.find(p => p.id === product.id)

      if (!item) {
        this.cart.push({
          ...product,
          quantity: 1
        })
      } else {
        item.quantity++
      }
      this.saveCart()
    },

    updateQuantity(id, quantity) {
      const item = this.cart.find(p => p.id === id)
      if (!item) return

      if (quantity <= 0) {
        this.cart = this.cart.filter(p => p.id !== id)
      } else {
        item.quantity = quantity
      }
      this.saveCart()
    },

    removeProduct(id) {
      this.cart = this.cart.filter(p => p.id !== id)
      this.saveCart()
    },

    clearCart() {
      this.cart = []
      this.saveCart()
    },

    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.cart))
    }
  },

  getters: {
    totalPrice(state) {
      return state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )
    },
    totalItems(state) {
        return state.cart.reduce(
            (sum, item) => sum + item.quantity,
            0
        )
    }
  }
})
