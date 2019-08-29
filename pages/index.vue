<template>
  <div class="home-page">
    <header>
      <header-menu :item-list="mockNavbarItemList" />
    </header>
    <carousel :image-list="mockCarouselImages" class="carousel" />
    <nav>
      <product-filter-bar :type-list="mockFilterBar" />
    </nav>
    <div class="main-display">
      <product-item
        v-for="(product, index) in mockProducts"
        :key="index"
        :product-key="index"
        class="product"
        :product-details="product"
      />
    </div>
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
import ProductItem from '../components/product-item.vue';
import ProductDetails from '../models/product-item-interface';

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
    ProductItem
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

  mockProducts: ProductDetails[] = [
    {
      name: 'közönséges hajzselé',
      image: {
        source: require('../assets/zsele.jpg'),
        alt: 'hair gel'
      },
      description: 'nem használ semmit, de drága',
      price: 5000
    },
    {
      name: 'közönséges olló',
      image: {
        source: require('../assets/ollo.jpg'),
        alt: 'hairdresser scissors'
      },
      description: 'tépi a hajat, életlen',
      price: 10000
    },
    {
      name: 'közönséges hajfesték',
      image: {
        source: require('../assets/festek.png'),
        alt: 'hair colorizer'
      },
      description: 'nem ilyen színű lesz, pech',
      price: 3000
    },
    {
      name: 'közönséges hajzselé',
      image: {
        source: require('../assets/zsele.jpg'),
        alt: 'hair gel'
      },
      description: 'nem használ semmit, de drága',
      price: 5000
    },
    {
      name: 'közönséges olló',
      image: {
        source: require('../assets/ollo.jpg'),
        alt: 'hairdresser scissors'
      },
      description: 'tépi a hajat, életlen',
      price: 10000
    },
    {
      name: 'közönséges hajfesték',
      image: {
        source: require('../assets/festek.png'),
        alt: 'hair colorizer'
      },
      description: 'nem ilyen színű lesz, pech',
      price: 3000
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
  display: flex;
  .product {
    margin: 1%;
    &:not(:first-child) {
      margin-left: 0;
    }
  }
  flex-wrap: wrap;
}

footer {
  background: $footerBackground;
  color: white;
  height: 4.2vh;
}
</style>
