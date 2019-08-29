<template>
  <div id="app">
    <div v-if="cartUIStatus === 'idle'" class="payment">
      <h3 class="is-size-5">Please enter your payment details:</h3>
      <label for="email" class="heading">Email</label>
      <input
        class="input"
        id="email"
        type="email"
        v-model="stripeEmail"
        placeholder="name@example.com"
      />
      <br />
      <label for="card" class="heading">Credit Card</label>
      <small>
        Test using this credit card:
        <span class="cc-number has-text-weight-bold">4242 4242 4242 4242</span>, and enter any 5 digits for the zip code
      </small>
      <card
        class="stripe-card"
        id="card"
        :class="{ complete }"
        stripe="pk_test_FSDftRtpUAjpbd2IfCGIJqWW00KtuiPvoW"
        :options="stripeOptions"
        @change="complete = $event.complete"
      />
      <button class="button" @click="pay" :disabled="!complete || !stripeEmail">Pay with credit card</button>
      <button class="button is-primary is-outlined" @click="emptyCart">Empty cart</button>
    </div>
  </div>
</template>

<script>
import { Card, createToken } from "vue-stripe-elements-plus";

export default {
  components: { Card },
  computed: {
    cartUIStatus() {
      return this.$store.getters["cart/cartUIStatus"];
    }
  },
  data() {
    return {
      stripeEmail: "",
      complete: false,
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
      }
    };
  },

  methods: {
    pay() {
      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.
      createToken().then(data => {
        const stripeData = { data, stripeEmail: this.stripeEmail };
        this.$store.dispatch("cart/postStripeFunction", stripeData);
      });
    },
    emptyCart() {
      this.$store.commit("cart/emptyCart");
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  margin-bottom: 40px;
}

.heading {
  margin-bottom: 0;
}

.stripe-card {
  background-color: white;
  border-color: #dbdbdb;
  border-radius: 4px;
  padding: 4px;
  border-radius: 4px;
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
}

.input,
.stripe-card {
  margin-bottom: 5px;
}
</style>