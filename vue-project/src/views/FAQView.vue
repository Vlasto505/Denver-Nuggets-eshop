<template>
  <div class="faq-page">
    <h1>FAQ – Frequently asked questions</h1>

    <section id="shipping">
      <h2>Shipping</h2>
      <p>
        All orders are processed within 1-2 business days. Delivery takes 2–7 days, depending on the service selected.
      </p>
    </section>

    <section id="returns">
      <h2>Returns</h2>
      <p>
        You can return a product that is not satisfactory within 14 days of delivery. The product must be unused and in its original packaging.
      </p>
    </section>

    <section id="payment">
      <h2>Payment</h2>
      <p>
        Payments are accepted by card or cash on delivery. We use secure encryption when paying by card.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FAQView'
}
</script>

<style scoped>
.faq-page {
  max-width: 800px;
  margin: 60px auto;
  line-height: 1.6;
  padding: 0 16px;
}

h1 {
  text-align: center;
  margin-bottom: 32px;
  color: #0e2240;
}

h2 {
  margin-top: 24px;
  margin-bottom: 12px;
  color: #fec524;
}

p {
  margin-bottom: 16px;
}
</style>
