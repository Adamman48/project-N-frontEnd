<template>
  <button>
    <i class="material-icons">{{ buttonOptions.icon }}</i>
    <span>{{ buttonOptions.title }}</span>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ButtonOptions from '../models/button-interface';

@Component
export default class GenericButton extends Vue {
  @Prop({ type: Object, required: true }) buttonOptions!: ButtonOptions;
}
</script>
