<template>
  <li class="cart-item">
    <img :src="item.image" alt="" class="cart-img" />

    <div class="cart-info">
      <h4>{{ item.name }}</h4>
      <p class="price">{{ item.price.toFixed(2) }} €</p>

      <div class="quantity">
        <label>Počet:</label>
        <input type="number" min="1" v-model.number="localQuantity" />
      </div>
    </div>

    <BaseButton class="remove-btn" @click="remove">❌</BaseButton>
  </li>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  name: 'CartItem',
  components: { BaseButton },
  props: {
    item: Object
  },
  data() {
    return {
      localQuantity: this.item.quantity
    }
  },
  watch: {
    localQuantity(newValue) {
      this.$emit('update-quantity', {
        id: this.item.id,
        quantity: newValue
      })
    }
  },
  methods: {
    remove() {
      this.$emit('remove', this.item.id)
    }
  }
}
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 16px;
  background: #f9f9f9;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

.cart-img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 12px;
}

.cart-info {
  flex: 1;
}

.cart-info h4 {
  margin: 0 0 8px 0;
  font-size: 16px;
}

.price {
  font-weight: bold;
  margin-bottom: 8px;
}

.quantity {
  display: flex;
  align-items: center;
  gap: 8px;
}

.quantity input {
  width: 60px;
  padding: 4px 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.remove-btn {
  background: #e53935;
  color: white;
  padding: 8px 12px;
  border-radius: 999px;
}

.remove-btn:hover {
  background: #b71c1c;
}
</style>
