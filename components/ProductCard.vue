<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="product.image" alt="product image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="columns is-multiline is-vcentered is-centered">
        <div class="column is-12">
          <div class="has-text-centered">
            <p class="title is-4 is-uppercase has-text-weight-light">{{product.name}}</p>
            <p class="subtitle is-6 has-text-weight-bold">{{product.price | euro}}</p>
          </div>
        </div>
        <div class="column is-12">
          <client-only>
            <star-rating
              :rating="product.rating"
              active-color="hsl(171, 95%, 34%)"
              :star-size="15"
              :read-only="true"
              :show-rating="false"
              style="margin: 5px auto; width: 80px !important;"
            ></star-rating>
          </client-only>
        </div>
        <div class="column is-12 has-text-centered">
          <nuxt-link
            :to="`${product.category}/${product.id}`"
            class="button is-outlined is-primary"
          >
            <span class="icon">
              <i class="fas fa-search"></i>
            </span>
            <span>View product</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  components: { StarRating },
  props: ["product"]
};
</script>

<style lang="scss" scoped>
.title {
  font-family: "Montserrat", sans-serif;
}
.subtitle {
  font-family: "Lexend Tera", sans-serif;
  margin-top: 0 !important;
}
</style>