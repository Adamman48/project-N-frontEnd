<template>
  <button></button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class GenericButton extends Vue {
  @Prop({ type: Object, required: true }) number!: number; //  learn about decorators
}
</script>
