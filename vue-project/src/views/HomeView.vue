<template>
  <div class="home">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-content">
        <h1>Denver Nuggets Fan Store</h1>
        <p class="subtitle">
         ⚒ Official merchandise for true Nuggets fans ⚒
        </p>

        <RouterLink to="/products" class="cta-btn">
          Shop Now
        </RouterLink>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="features">
      <div class="feature">
        <h3>🎽 Official Gear</h3>
        <p>Authentic jerseys, caps and accessories.</p>
      </div>

      <div class="feature">
        <h3>🚚 Fast Shipping</h3>
        <p>Quick delivery across Europe and North America.</p>
      </div>

      <div class="feature">
        <h3>⭐ Fan Favorite</h3>
        <p>Loved by Nuggets fans worldwide.</p>
      </div>
    </section>

    <!-- PREVIEW -->
    <section class="preview">
  <h2>Popular Products</h2>

  <div class="preview-grid">

    <RouterLink
      to="/product/3"
      class="preview-card"
      style="background-image: url('/images/products/jokic_milehigh.jpg')"
    >
    </RouterLink>

    <RouterLink
      to="/product/10"
      class="preview-card"
      style="background-image: url('/images/products/cap_blue.jpg')"
    >
    </RouterLink>

    <RouterLink
      to="/product/14"
      class="preview-card"
      style="background-image: url('/images/products/ball_grafiti.jpg')"
    >
    </RouterLink>

  </div>

  <RouterLink to="/products" class="secondary-btn">
    View All Products →
  </RouterLink>
</section>


  </div>
</template>


<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home {
  font-family: system-ui, sans-serif;
}

/* HERO */
.hero {
  height: 70vh;
  background:
    linear-gradient(rgba(14,34,64,0.7), rgba(14,34,64,0.9)),
    url('/images/products/jokic_city.jpg') center / cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.hero-content {
  text-align: center;
  max-width: 600px;
}

.hero h1 {
  font-size: 48px;
  margin-bottom: 16px;
}

.subtitle {
  font-size: 20px;
  margin-bottom: 32px;
  opacity: 0.9;
}

.cta-btn {
  background: #fec524;
  color: #0e2240;
  padding: 14px 32px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  transition: transform 0.2s ease;
}

.cta-btn:hover {
  transform: translateY(-2px);
}

/* FEATURES */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
  padding: 64px 32px;
  background: rgb(255, 238, 0);
  text-align: center;
}

.feature h3 {
  font-size: 20px;
  margin-bottom: 8px;
}

/* PREVIEW */
.preview {
  padding: 64px 32px;
  text-align: center;
}

.preview h2 {
  font-size: 32px;
  margin-bottom: 32px;
}

.preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

.preview-card {
  height: 260px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  color: #0b5fb8;
  font-weight: bold;
  font-size: 18px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.25);
}

.secondary-btn {
  color: #0e2240;
  font-weight: bold;
  text-decoration: none;
}

</style>
