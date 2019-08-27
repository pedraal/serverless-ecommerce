<template>
  <div class="container">
    <div class="columns is-multiline">
      <div class="column is-6-tablet is-4-widescreen" v-for="chair in chairs" :key="chair.name">
        <product-card :product="chair" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
export default {
  components: {
    ProductCard
  },
  computed: {
    chairs() {
      return this.$store.getters["products/products"].filter(
        product => product.category === "chairs"
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.columns {
  margin: 0 0 40px 0;
}
</style>