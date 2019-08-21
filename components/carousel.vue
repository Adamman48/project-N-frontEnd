<template>
  <div>
    <b-carousel
      id="carousel-main"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
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
      <b-carousel-slide
        :img-src="'https://picsum.photos/1024/480/?image=52'"
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
}
</script>

<style lang="scss" scoped></style>
