<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- CONTACT -->
      <div class="footer-section">
        <h3>Kontakt</h3>
        <p>Email: <a href="mailto:info@nuggets-shop.com">info@nuggets-shop.com</a></p>
        <p>Tel: <a href="tel:+421900123456">+421 900 123 456</a></p>
      </div>

      <!-- FAQ -->
      <div class="footer-section">
        <h3>FAQ</h3>
        <ul>
          <li><a href="/faq#shipping">Shipping</a></li>
          <li><a href="/faq#returns">Returns</a></li>
          <li><a href="/faq#payment">Payment</a></li>
        </ul>
      </div>

      <!-- FOLLOW US -->
      <div class="footer-section">
        <h3>Follow us on:</h3>
        <div class="social-icons">
          <a href="https://www.facebook.com/DenverNuggets/?locale=sr_RS" target="_blank">ⓕ</a>
          <a href="https://www.instagram.com/nuggets/" target="_blank">📸</a>
          <a href="https://x.com/nuggets?lang=sr" target="_blank">𝕏</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      © {{ year }} Denver Nuggets E-shop | All Rights Reserved
    </div>
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
  background-color: #0b2545;
  color: white;
  padding: 40px 20px 20px;
  font-family: sans-serif;
}

.footer a {
  color: #fec524; /* Nuggets gold */
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 24px;
  margin-bottom: 24px;
}

.footer-section h3 {
  font-size: 18px;
  margin-bottom: 12px;
  color: #fec524;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 8px;
}

.social-icons a {
  font-size: 24px;
  margin-right: 12px;
  display: inline-block;
}

.footer-bottom {
  text-align: center;
  font-size: 14px;
  border-top: 1px solid #fec524;
  padding-top: 12px;
  color: #ccc;
}
</style>
