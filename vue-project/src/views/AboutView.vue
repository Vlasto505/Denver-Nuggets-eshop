<template>
  <div class="about">
    <h1>About Denver Nuggets Fan Store</h1>

    <div class="intro">
      <img src="/images/products/logo.png" alt="Store Logo" class="logo" />
      <p>
        ⚒ Welcome to the official Denver Nuggets fan store – a place for every basketball lover! ⚒
      </p>
    </div>

    <section class="features">
      <div class="feature">
        <img src="/images/icons/vue.png" alt="Vue 3" />
        <h3>Built with Vue 3</h3>
        <p>Modern, fast and reactive front-end framework for a smooth experience.</p>
      </div>

      <div class="feature">
        <img src="/images/icons/pinia.png" alt="Pinia" />
        <h3>State Management with Pinia</h3>
        <p>Keeping your cart, orders and favorites in perfect sync.</p>
      </div>

      <div class="feature">
        <img src="/images/icons/router.png" alt="Vue Router" />
        <h3>Navigation with Vue Router</h3>
        <p>Switch pages smoothly between products, cart, and checkout.</p>
      </div>
    </section>

    <section class="note">
      <p>
        ⚠️ All products and images are used for educational purposes only.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about {
  max-width: 900px;
  margin: 60px auto;
  line-height: 1.6;
  text-align: center;
  padding: 0 20px;
}

h1 {
  font-size: 36px;
  margin-bottom: 32px;
  color: #0e2240; /* Nuggets navy */
}

.intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 40px;
}

.intro .logo {
  width: 120px;
  border-radius: 12px;
}

.features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin-bottom: 40px;
}

.feature {
  background: rgb(255, 238, 0);
  padding: 20px;
  border-radius: 12px;
  width: 250px;
  transition: all 0.3s ease;
}

.feature:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
}

.feature img {
  width: 60px;
  margin-bottom: 12px;
}

.feature h3 {
  font-size: 18px;
  margin-bottom: 8px;
  color: #0e2240;
}

.feature p {
  font-size: 14px;
  color: #555;
}

.note {
  background: #fff3cd;
  color: #856404;
  padding: 16px;
  border-radius: 8px;
  font-weight: bold;
}
</style>
