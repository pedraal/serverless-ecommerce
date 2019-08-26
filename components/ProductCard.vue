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
            <p class="title is-4">{{product.name}}</p>
            <p class="subtitle is-6">{{product.price}}€</p>
          </div>
        </div>
        <div class="level-item">
          <button class="button">
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
export default {
  props: ["product"]
};
</script>

<style lang="scss" scoped>
.subtitle {
  margin-top: 0 !important;
}
</style>