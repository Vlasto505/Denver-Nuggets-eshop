<template>
  <span v-if="count > 0" class="badge">
    {{ count }}
  </span>
</template>

<script>
import { useCartStore } from '@/stores/cart'

export default {
  name: 'CartBadge',
  computed: {
    count() {
      const cartStore = useCartStore()
      return cartStore.totalItems
    }
  }
}
</script>

<style scoped>
.badge {
  background: red;
  color: white;
  border-radius: 50%;
  padding: 2px 8px;
  font-size: 12px;
  margin-left: 6px;
}
</style>
