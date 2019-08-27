<template>
  <div class="container">
    <h2 class="title has-text-centered">Your cart</h2>
    <div class="cart-display" v-if="cartCount > 0">
      <table class="table is-transparent is-fullwidth">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in cart" :key="product.id">
            <td class="is-capitalized content">
              <img :src="product.image" :alt="product.name" />
              <h4>{{product.name}}</h4>
            </td>
            <td>
              <p class="has-text-primary">{{product.price | euro}}</p>
            </td>
            <td>
              <p>
                <strong>{{product.quantity}}</strong>
              </p>
            </td>
            <td>
              <p>{{product.price*product.quantity | euro}}</p>
            </td>
          </tr>
          <tr></tr>
        </tbody>
      </table>
      <div class="columns">
        <div class="column is-6"></div>
        <div class="column is-6">
          <div class="level is-mobile">
            <div class="level-left">
              <div class="caption">
                <p>
                  <strong>Subtotal:</strong>
                </p>
                <p class="has-text-weight-light">Shipping</p>
                <p class="total">
                  <strong>Total:</strong>
                </p>
              </div>
            </div>
            <div class="level-right">
              <div class="value has-text-right">
                <p>
                  <strong>{{cartTotal | euro}}</strong>
                </p>
                <p class="has-text-weight-light">Free shipping</p>
                <p class="total">
                  <strong>{{cartTotal | euro}}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="has-text-centered">
      <p>Your cart is empty, fill it up!</p>
      <nuxt-link exact to="/" class="button is-primary is-outlined">Start shopping</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.getters["cart/cart"];
    },
    cartCount() {
      return this.$store.getters["cart/cartCount"];
    },
    cartTotal() {
      return this.$store.getters["cart/cartTotal"];
    }
  }
};
</script>

<style lang="scss" scoped>
h2.title {
  margin-bottom: 40px;
}
td {
  img {
    height: 100px;
    float: left;
  }
  h4,
  p {
    padding-top: 36px;
  }
}
.level {
  .caption,
  .value {
    p {
      margin-bottom: 10px;
      padding: 5px;
      &.total {
        background: #d1d0d4;
        min-width: 150px;
      }
    }
  }
}
</style>