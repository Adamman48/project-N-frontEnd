<template>
  <div class="container">
    <b-button @click="$bvModal.show(`product-modal-${productKey}`)">{{
      productDetails.name
    }}</b-button>
    <b-modal
      :id="`product-modal-${productKey}`"
      centered
      :title="productDetails.name"
    >
      <img
        class="image"
        :src="productDetails.image.source"
        :alt="productDetails.image.alt"
      />
      <section>
        <span class="price my-4">{{ productDetails.price }}Ft</span>
        <span class="description my-4"
          >Részletek: {{ productDetails.description }}</span
        >
      </section>
    </b-modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ProductDetails from 'models/product-item-interface';

@Component
export default class ProductItem extends Vue {
  @Prop({ type: Object, required: true }) productDetails!: ProductDetails[];
  @Prop({ type: Number, required: true }) productKey!: number;
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
