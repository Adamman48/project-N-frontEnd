<template>
  <div class="container">
    <img
      class="image"
      :src="productDetails.image.source"
      :alt="productDetails.image.alt"
    />
    <span class="name">{{ productDetails.name }}</span>
    <span class="price">{{ productDetails.price }}</span>
    <span class="description">{{ productDetails.description }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ProductDetails from 'models/product-item-interface';

@Component
export default class ProductItem extends Vue {
  @Prop({ type: Object, required: true }) productDetails!: ProductDetails;
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
</style>
