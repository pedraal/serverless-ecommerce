<template>
  <div class="container wrapper">
    <cart-steps />
    <div v-if="cartUIStatus === 'idle'">
      <cart-display />
    </div>

    <div v-else-if="cartUIStatus === 'loading'" class="loader-anim">
      <loader-anim />
    </div>

    <div v-else-if="cartUIStatus === 'success'" class="has-text-centered">
      <h2 class="title has-text-centered">Success!</h2>
      <p>Thank you for your purchase. You'll be receiving your items in 4 business days.</p>
      <br />
      <p>Forgot something?</p>
      <nuxt-link exact to="/" class="button is-primary is-outlined">Back to Home</nuxt-link>
    </div>
    <div v-else-if="cartUIStatus === 'failure'">
      <p
        class="has-text-centered"
      >Oops, something went wrong. Redirecting you to your cart to try again.</p>
    </div>
  </div>
</template>

<script>
import CartDisplay from "@/components/CartDisplay";
import CartSteps from "@/components/CartSteps";
import LoaderAnim from "@/components/LoaderAnim";

export default {
  components: {
    CartDisplay,
    CartSteps,
    LoaderAnim
  },
  computed: {
    cartUIStatus() {
      return this.$store.getters["cart/cartUIStatus"];
    }
  }
};
</script>

<style lang="scss" scoped>
.h-separator {
  width: 80%;
  display: block;
  margin: 20px auto;
  height: 1px;
  background: #b9b4b4;
}
.wrapper {
  min-height: 300px;
}
</style>