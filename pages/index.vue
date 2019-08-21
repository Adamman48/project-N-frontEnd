<template>
  <div>
    <header><header-menu :mock-menu="mockNavbarItemList" /></header>
    <img src="../assets/blowdry1.jpg" alt="carousel" />
    <nav>
      navbar
    </nav>
    <footer>footer</footer>
    <generic-button :button-options="productType" type="button" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GenericButton from '../components/generic-button.vue';
import HeaderMenu from '../components/header-menu.vue';
import ButtonOptions from '../models/button-interface';

@Component({
  head(): Object {
    return {
      title: 'Project N',
      link: [
        {
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
          rel: 'stylesheet'
        }
      ]
    };
  },
  components: {
    GenericButton,
    HeaderMenu
  }
})
export default class Home extends Vue {
  productType: ButtonOptions = {
    title: 'szia világ',
    icon: 'android'
  };
  mockNavbarItemList: object[] = [
    { title: 'faq' },
    { title: 'elérhetőség' },
    { title: 'jogi nyilatkozat' }
  ];
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
