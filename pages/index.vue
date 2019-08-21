<template>
  <div>
    <header><header-menu :item-list="mockNavbarItemList" /></header>
    <carousel :image-list="mockCarouselImages" />
    <nav>
      <product-filter-bar :type-list="mockFilterBar" />
    </nav>
    <div>MEGJELENÍTÉS</div>
    <footer>footer</footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductFilterBar from '../components/product-filter-navbar.vue';
import HeaderMenu from '../components/header-menu.vue';
import ButtonOptions from '../models/button-interface';
import Carousel from '../components/carousel.vue';
import CarouselImageData from '../models/carousel-interface';

@Component({
  head(): Object {
    return {
      title: 'Kezdőlap' /* later modify, add additional meta content to head */,
      link: [
        {
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
          rel: 'stylesheet'
        }
      ]
    };
  },
  components: {
    HeaderMenu,
    ProductFilterBar,
    Carousel
  }
})
export default class Home extends Vue {
  mockFilterBar: ButtonOptions[] = [
    { title: 'hajlakk', icon: 'android' },
    { title: 'olló' },
    { title: 'haj wax' },
    { title: 'haj festék' },
    { title: 'profi sampon' },
    { title: 'hajszárítók' },
    { title: 'haj zselé' }
  ];
  mockNavbarItemList: ButtonOptions[] = [
    { title: 'faq' },
    { title: 'elérhetőség' },
    { title: 'jogi nyilatkozat' }
  ];
  mockCarouselImages: CarouselImageData[] = [
    {
      caption: 'image 1',
      text: 'this is an image',
      source: '../assets/blowdry1.jpg'
    },
    {
      caption: 'image 2',
      text: 'also an image',
      source: '../assets/istockphoto-480912050-612x612.jpg'
    },
    {
      caption: 'image 3',
      text: 'still an image',
      source: '../assets/istockphoto-498615428-612x612.jpg'
    },
    {
      caption: 'image 4',
      text: 'yes...image',
      source: '../assets/istockphoto-859611718-612x612.jpg'
    }
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
