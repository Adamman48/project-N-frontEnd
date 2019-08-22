<template>
  <div class="header-body">
    <span class="firm-name">Cégnév</span>
    <!-- modify later -->
    <div class="header-menu">
      <menu-item
        v-for="(item, index) in itemList"
        :key="index"
        :item="item"
        class="text-uppercase"
      />
    </div>
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
  @Prop({ type: Array, required: true }) itemList!: ButtonOptions[];
}
</script>

<style lang="scss" scoped>
.header-body {
  width: 100vw;
  display: flex;
  .header-menu {
    width: 100%;
    display: flex;
    ::v-deep {
      justify-content: flex-end;
    }
  }
}
</style>
