<template>
  <div class="carousel-container">
    <b-carousel
      id="carousel-main"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1220"
      img-height="610"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        v-for="(image, index) in imageList"
        :key="index"
        :caption="image.caption"
        :text="image.text"
        :img-src="image.source"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import CarouselImageData from '../models/carousel-interface';

@Component
export default class Carousel extends Vue {
  @Prop({ type: Array, required: true }) imageList!: CarouselImageData[];

  slide: number = 0;
  sliding: null | boolean = null;
  onSlideStart(): void {
    this.sliding = true;
  }
  onSlideEnd(): void {
    this.sliding = false;
  }
}
</script>

<style lang="scss" scoped>
#carousel-main div {
  width: 70vw;
  height: 45vh;
}
</style>
