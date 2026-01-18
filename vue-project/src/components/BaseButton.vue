<template>
  <button class="base-button" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton'
}
</script>

<style scoped>
.base-button {
  padding: 6px 12px;
  border: none;
  background-color: #fdb927; /* Nuggets yellow */
  color: #0e2240;
  font-weight: bold;
  cursor: pointer;
}

.base-button:hover {
  opacity: 0.9;
}
</style>
