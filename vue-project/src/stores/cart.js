import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: []
  }),
  actions: {
    addToCart(product) {
      const item = this.cart.find(p => p.id === product.id)

      if (item) {
        item.quantity++
      } else {
        this.cart.push({
          ...product,
          quantity: 1
        })
      }
    },

    increaseQuantity(id) {
      const item = this.cart.find(p => p.id === id)
      if (item) {
        item.quantity++
      }
    },

    decreaseQuantity(id) {
      const item = this.cart.find(p => p.id === id)
      if (item) {
        item.quantity--
        if (item.quantity === 0) {
          this.cart = this.cart.filter(p => p.id !== id)
        }
      }
    }
  },
  getters: {
    totalPrice(state) {
      return state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )
    }
  }
})
