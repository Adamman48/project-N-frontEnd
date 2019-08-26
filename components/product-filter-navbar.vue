<template>
  <div>
    <menu-item
      v-for="(productType, index) in typeList"
      :key="index"
      :item="productType"
      class="text-uppercase"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ButtonOptions from '../models/button-interface';
import MenuItem from './menu-item.vue';

@Component({
  components: {
    MenuItem
  }
})
export default class ProductFilterBar extends Vue {
  @Prop({ type: Array, required: true }) typeList!: ButtonOptions[];
}
</script>

<style lang="scss" scoped></style>
