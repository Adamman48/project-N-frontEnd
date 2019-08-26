import { shallowMount, mount } from '@vue/test-utils';
import Carousel from '../components/carousel.vue';

describe('Carousel', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(Carousel, {
      propsData: {
        imageList: [
          {
            caption: 'image 1',
            text: 'this is a dummy image',
            source: 'test.jpg'
          },
          {
            caption: 'mock 2',
            text: 'this is a dummy image',
            source: 'test.jpg'
          }
        ]
      }
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('renders the correct number of images', () => {
    const wrapper = mount(Carousel, {
      propsData: {
        imageList: [
          {
            caption: 'image 1',
            text: 'this is a dummy image',
            source: 'test.jpg'
          },
          {
            caption: 'mock 2',
            text: 'this is a dummy image',
            source: 'test.jpg'
          }
        ]
      }
    });
    const images = wrapper.findAll('img');

    expect(images.length).toBe(2);
  });

  /* add a test for clicking and incrementing .slide */
});
