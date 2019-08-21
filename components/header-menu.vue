<template>
  <div>
    <span>Cégnév</span>
    <!-- modify later -->
    <menu-item
      v-for="(mockItem, index) in mockMenu"
      :key="index"
      :item="mockItem"
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
export default class HeaderMenu extends Vue {
  @Prop({ type: Array, required: true }) mockMenu!: ButtonOptions;
}
</script>

<style lang="scss" scoped></style>
