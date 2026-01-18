<template>
  <div class="home">
    <h1>Welcome to Denver Nuggets Fan Store</h1>

    <p class="subtitle">
      Official fan merchandise of the Denver Nuggets 🏀
    </p>

    <p>
      Jerseys, caps, basketballs and more – support your team in style.
    </p>

    <RouterLink to="/products" class="btn">
      Shop Now
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 60px auto;
  text-align: center;
}

.subtitle {
  font-size: 18px;
  margin-bottom: 16px;
  color: #555;
}

.btn {
  display: inline-block;
  margin-top: 24px;
  padding: 12px 24px;
  background: #0e2240; /* Nuggets navy */
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
}

.btn:hover {
  background: #fec524; /* Nuggets gold */
  color: #0e2240;
}
</style>
