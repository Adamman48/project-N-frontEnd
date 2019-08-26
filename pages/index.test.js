import { shallowMount, mount } from '@vue/test-utils';
import Home from '../pages/index.vue';

describe('App', () => {
  it('mounts without crashing', () => {
    const wrapper = mount(Home);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('is a Vue instance', () => {
    const wrapper = shallowMount(Home);

    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
