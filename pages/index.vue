<template>
  <div class="home-page">
    <header>
      <header-menu :item-list="mockNavbarItemList" />
    </header>
    <carousel :image-list="mockCarouselImages" class="carousel" />
    <nav>
      <product-filter-bar :type-list="mockFilterBar" />
    </nav>
    <div class="main-display col">MEGJELENÍTÉS</div>
    <footer>footer</footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { BCarousel } from 'bootstrap-vue';
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
    Carousel,
    BCarousel
  }
})
export default class Home extends Vue {
  mockFilterBar: ButtonOptions[] = [
    { title: 'hajlakk' },
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
      source: require('../assets/11223838-situation-in-a-hair-salon.jpg')
    },
    {
      caption: 'image 2',
      text: 'also an image',
      source: require('../assets/istockphoto-480912050-612x612.jpg')
    },
    {
      caption: 'image 3',
      text: 'still an image',
      source: require('../assets/istockphoto-498615428-612x612.jpg')
    },
    {
      caption: 'image 4',
      text: 'yes...image',
      source: require('../assets/istockphoto-859611718-612x612.jpg')
    }
  ];
}
</script>

<style lang="scss" scoped>
@import '../assets/_color-palette.scss';
@import '../assets/_mixins.scss'; //  might be better with flex-center if free space would be used

body {
  margin: 0;
}

.home-page {
  background: $mainBackground;
  height: 100vh;
  width: 100%;
}

header {
  display: flex;
  background: $headerBackground;
}

.carousel {
  opacity: 0.9;
  height: 45vh;
  width: 70vw;
  @include centerContent();
}

nav {
  background: $navbarBackground;
}

.main-display {
  width: 80vw;
  height: 45vh;
  @include centerContent();
  background: $displayBackground;
  opacity: 0.6;
}

footer {
  background: $footerBackground;
  color: white;
  height: 4.2vh;
}
</style>
