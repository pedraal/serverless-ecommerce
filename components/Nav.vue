<template>
  <div class="container">
    <nav class="level is-mobile">
      <p class="level-item has-text-centered">
        <nuxt-link tag="a" to="/" active-class="active" exact>Home</nuxt-link>
      </p>
      <p class="level-item has-text-centered separator">||</p>
      <p class="level-item has-text-centered">
        <nuxt-link tag="a" to="/chairs" active-class="active">Chairs</nuxt-link>
      </p>
      <p class="level-item has-text-centered separator">||</p>

      <p class="level-item has-text-centered">
        <nuxt-link tag="a" to="/tables" active-class="active">Tables</nuxt-link>
      </p>
      <p class="level-item has-text-centered separator">||</p>

      <p class="level-item has-text-centered">
        <nuxt-link tag="a" to="/cart" active-class="active">Cart</nuxt-link>
        <span class="cart-count tag is-rounded is-dark" v-if="cartCount !== 0">{{cartCount}}</span>
      </p>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    cartCount() {
      return this.$store.getters["cart/cartCount"];
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  margin: 1rem 10px;
  padding: 10px 0;
  border-top: 1px solid #b9b4b4;
  border-bottom: 1px solid #b9b4b4;

  a {
    color: #363636;
    transition: all 0.5s ease;
    border-bottom: 1px solid rgba(0, 0, 0, 0);
    &:hover {
      color: rgb(93, 93, 93);
    }
    &.active {
      color: hsl(171, 95%, 34%);

      border-bottom: 1px solid hsl(171, 95%, 34%);
      &:hover {
        color: #363636;
        border-bottom: 1px solid rgb(93, 93, 93);
      }
    }
  }

  .separator {
    color: #b9b4b4;
  }

  .cart-count {
    font-size: 10px;
    position: relative;
    bottom: 10px;
  }
}
@media screen and (max-width: 1024px) {
  .separator {
    display: none;
  }
}
</style>