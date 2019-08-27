<template>
  <div class="container">
    <div class="columns is-multiline">
      <div class="column is-6-tablet is-4-widescreen" v-for="table in tables" :key="table.name">
        <product-card :product="table" />
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
    tables() {
      return this.$store.getters["products/products"].filter(
        product => product.category === "tables"
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