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

  /* it('shows the previous image when left arrow is clicked', () => {
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
    const previousButton = wrapper.find('.carousel-control-prev');
    const nextButton = wrapper.find('.carousel-control-next');
    
    nextButton.trigger('click');
    const carousel = wrapper.find('#carousel-main');
    const activeImage = wrapper.find('.carousel-item .active');
    console.log(activeImage.vm.$children[0])
    expect(activeImage).toContain('mock 2');
  }) */
});
