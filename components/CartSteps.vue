<template>
  <div class="container">
    <div class="columns is-mobile has-text-centered">
      <div class="column is-4">
        <div class="shopping">
          <h2
            class="is-size-4 tag is-rounded"
            :class="{ 'is-primary': cartUIStatus === 'idle' && cartCount === 0 }"
          >1</h2>
          <h4 class="heading">Shopping Cart</h4>
        </div>
      </div>
      <div class="column is-4">
        <div class="checkout">
          <h2
            class="is-size-4 tag is-rounded"
            :class="{ 'is-primary': cartUIStatus === 'idle' && cartCount > 0 }"
          >2</h2>
          <h4 class="heading">Check out</h4>
        </div>
      </div>
      <div class="column is-4">
        <div class="order">
          <h2
            class="is-size-4 tag is-rounded"
            :class="{ 'is-primary': cartUIStatus === 'success' }"
          >3</h2>
          <h4 class="heading">Order Complete</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartUIStatus() {
      return this.$store.getters["cart/cartUIStatus"];
    },
    cartCount() {
      return this.$store.getters["cart/cartCount"];
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-bottom: 20px;
}
.tag {
  border: 1px solid #d1d0d4;
}
</style>