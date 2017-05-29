import Vue from 'vue'
import Hello from '@/components/myPhone'

describe('myPhone.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.p-name').textContent)
      .to.equal('Morgan Murrah')
  })
})
