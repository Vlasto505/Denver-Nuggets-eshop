<template>
  <nav class="navbar">
    <h1 class="logo">Denver Nuggets Store</h1>

    <ul class="nav-links">
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/products">Products</RouterLink>
      </li>
      <li>
        <RouterLink to="/cart">Cart</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">About</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #0e2240; /* Nuggets blue */
  color: white;
}

.logo {
  font-size: 20px;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 16px;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.nav-links a.router-link-active {
  text-decoration: underline;
}
</style>
