<template>
  <button>
    <i class="material-icons">{{ item.icon }}</i>
    <span>{{ item.title }}</span>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ButtonOptions from '../models/button-interface';

@Component
export default class MenuItem extends Vue {
  @Prop({ type: Object, required: true }) item!: ButtonOptions;
}
</script>

<style lang="scss" scoped>
button {
  outline: 0;
}
</style>
