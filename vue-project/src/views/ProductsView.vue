<template>
  <div>
    <h2>Products</h2>

    <div class="products">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'ProductsView',
  components: {
    ProductCard
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Nikola Jokic Jersey',
          price: 89.99,
          image: 'https://via.placeholder.com/200'
        },
        {
          id: 2,
          name: 'Denver Nuggets Cap',
          price: 29.99,
          image: 'https://via.placeholder.com/200'
        }
      ]
    }
  }
}
</script>

<style scoped>
.products {
  display: flex;
  gap: 16px;
}
</style>
