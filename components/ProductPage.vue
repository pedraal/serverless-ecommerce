<template>
  <div class="container">
    <div class="columns">
      <div class="column is-5">
        <img :src="product[0].image" alt="product" />
      </div>
      <div class="column is-7">
        <div class="content">
          <br />
          <h2 class="is-uppercase">{{product[0].name}}</h2>
          <client-only>
            <star-rating
              :rating="product[0].rating"
              active-color="#4A4A4A"
              :star-size="20"
              :read-only="true"
              :show-rating="false"
              style="margin: 5px 0"
            ></star-rating>
          </client-only>
          <p class="subtitle has-text-primary">{{product[0].price | euro}}</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil placeat, magnam, error illum, molestiae saepe sequi similique velit facere nobis exercitationem sapiente corrupti? Labore sequi soluta est hic at illum perspiciatis possimus quo ullam dicta et commodi cupiditate eius corrupti sint, dolores officia reprehenderit ex provident! Laboriosam iure molestiae sint?</p>
          <div class="field has-addons">
            <p class="control">
              <a class="button is-primary" @click="decrement">-</a>
            </p>
            <p class="control">
              <input class="input" type="text" style="width:50px" v-model="quantity" />
            </p>
            <p class="control">
              <a class="button is-primary" @click="increment">+</a>
            </p>
          </div>
          <button class="button is-primary is-outlined" @click="addToCart">Add to cart</button>
        </div>
      </div>
    </div>
    <div class="separator"></div>
    <div class="content">
      <h4>Reviews</h4>
      <client-only>
        <star-rating
          :rating="product[0].rating"
          active-color="#4A4A4A"
          :star-size="15"
          :read-only="true"
          :show-rating="false"
          style="margin: 5px 0"
        ></star-rating>
      </client-only>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit earum sequi itaque eveniet maiores quos voluptatum et reprehenderit dolorum illo beatae iusto, esse natus recusandae quaerat, consequuntur labore ipsam dolorem.</p>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  components: { StarRating },
  data() {
    return {
      id: this.$route.params.id,
      quantity: 1
    };
  },
  computed: {
    product() {
      return this.$store.getters["products/products"].filter(
        product => product.id == this.id
      );
    }
  },
  methods: {
    decrement() {
      if (this.quantity > 0) this.quantity--;
    },
    increment() {
      this.quantity++;
    },
    addToCart() {
      let payload = this.product[0];
      payload.quantity = this.quantity;
      this.$store.commit("cart/addToCart", { ...payload });
      this.quantity = 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  margin-bottom: 40px;
}
.separator {
  width: 80%;
  max-width: 400px;
  height: 1px;
  background: #b9b4b4;
  margin: 20px auto;
}
.columns {
  margin: 0;
}
</style>