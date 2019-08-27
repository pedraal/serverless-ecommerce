<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="product.image" alt="product image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="level">
        <div class="level-item">
          <div class="has-text-centered">
            <p class="title is-4 is-uppercase has-text-weight-light">{{product.name}}</p>
            <p class="subtitle is-6 has-text-weight-bold">{{product.price}}€</p>
          </div>
        </div>
        <div class="level-item">
          <star-rating
            :rating="product.rating"
            active-color="hsl(171, 100%, 41%)"
            :star-size="15"
            :read-only="true"
            :show-rating="false"
            style="margin: 5px 0"
          ></star-rating>
        </div>
        <div class="level-item">
          <button class="button is-outlined is-primary">
            <span class="icon">
              <i class="fas fa-search"></i>
            </span>
            <span>View product</span>
          </button>
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