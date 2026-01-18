<template>
  <footer class="footer">
    <p>
      © {{ year }} Denver Nuggets E-shop |
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  margin-top: 40px;
  padding: 16px;
  text-align: center;
  background-color: #0b2545;
  color: white;
}
</style>
