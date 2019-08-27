<template>
  <div class="container">
    <cart-table />
  </div>
</template>

<script>
import CartTable from "@/components/CartTable";
export default {
  components: {
    CartTable
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 30vh;
}
</style>