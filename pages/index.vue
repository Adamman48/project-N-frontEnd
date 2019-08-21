<template>
  <div>
    <header>header</header>
    <img src="../assets/blowdry1.jpg" alt="carousel" />
    <nav>navbar</nav>
    <footer>footer</footer>
    <generic-button :button-options="productType" type="button" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GenericButton from '../components/generic-button.vue';
import ButtonOptions from '../models/button-interface';

@Component({
  components: {
    GenericButton
  }
})
export default class Home extends Vue {
  productType: ButtonOptions = {
    title: 'szia világ'
  };
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  nav {
    color: red;
  }
}
</style>
