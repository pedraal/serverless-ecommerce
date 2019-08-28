<template>
  <div class="container">
    <cart-steps />
    <cart-display />
  </div>
</template>

<script>
import CartDisplay from "@/components/CartDisplay";
import CartSteps from "@/components/CartSteps";
export default {
  components: {
    CartDisplay,
    CartSteps
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
</style>