<template>
  <div class="container">
    <img
      class="image"
      :src="productDetails.image.source"
      :alt="productDetails.image.alt"
    />
    <section>
      <span class="name">{{ productDetails.name }}</span>
      <span class="price">{{ productDetails.price }}Ft</span>
      <span class="description"
        >Részletek: {{ productDetails.description }}</span
      >
    </section>
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
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
  background: lightcoral;
  height: 20%;
  max-width: 19%;
}

.image {
  max-width: 20%;
}

section {
  display: flex;
  flex-direction: column;
}
</style>
