<template>
  <div class="products-page">
    <h2>Products</h2>

    <!-- CATEGORY FILTER -->
    <div class="categories">
      <button
        v-for="cat in ['all', 'jerseys', 'caps', 'basketballs', 'other']"
        :key="cat"
        :class="{ active: activeCategory === cat }"
        @click="activeCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <!-- GRID -->
    <div class="products-grid">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>


<script>
import ProductCard from '@/components/ProductCard.vue'
import { useProductsStore } from '@/stores/products'

export default {
  name: 'ProductsView',
  components: { ProductCard },

  data() {
    return {
      activeCategory: 'all',
      productsStore: useProductsStore()
    }
  },

  computed: {
    filteredProducts() {
      if (this.activeCategory === 'all') {
        return this.productsStore.products
      }

      return this.productsStore.products.filter(
        product => product.category === this.activeCategory
      )
    }
  }
}
</script>


<style scoped>
.products-page {
  padding: 32px;
}

.categories {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}

.categories button {
  background: #f2f2f2;
  border: none;
  padding: 8px 16px;
  border-radius: 999px;
  cursor: pointer;
  text-transform: capitalize;
}

.categories button.active {
  background: #0e2240;
  color: #fec524;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
}
</style>

