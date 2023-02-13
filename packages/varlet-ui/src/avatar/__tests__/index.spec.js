import BackTop from '..'
import VarBackTop from '../BackTop'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay, mockScrollTo } from '../../utils/jest'

mockScrollTo(HTMLDivElement)

const clickHandle = jest.fn()
const Wrapper = {
  components: {
    [VarBackTop.name]: VarBackTop,
  },
  methods: {
    clickHandle,
  },
  template: `
    <div class="back-top__test" style="height: 300px; overflow: auto">
      <div style="height: 5000px"></div>
      <var-back-top
        target=".back-top__test"
        :duration="500"
        visibility-height="500"
        right="80"
        bottom="80"
        @click="clickHandle"
      />
    </div>
  `,
}

test('test backTop plugin', () => {
  const app = createApp({}).use(BackTop)
  expect(app.component(BackTop.name)).toBeTruthy()
})

describe('test backTop props', () => {
  test('test visibilityHeight prop', async () => {
    const wrapper = mount(Wrapper, { attachTo: document.body })

    const backTopEl = document.querySelector('.var-back-top')
    expect(backTopEl.classList.contains('var-back-top--active')).toBe(false)

    wrapper.element.scrollTop = 600
    await wrapper.trigger('scroll')
    expect(backTopEl.classList.contains('var-back-top--active')).toBe(true)

    wrapper.unmount()
  })

  test('test position prop', async () => {
    const wrapper = mount(Wrapper, { attachTo: document.body })
    const backTopEl = document.querySelector('.var-back-top')

    expect(backTopEl.style.right).toBe('80px')
    expect(backTopEl.style.bottom).toBe('80px')

    wrapper.unmount()
  })
})

test('test backTop event', async () => {
  const wrapper = mount(Wrapper, { attachTo: document.body })
  const backTopEl = document.querySelector('.var-back-top')

  wrapper.element.scrollTop = 600
  await wrapper.trigger('scroll')
  await backTopEl.click()
  await delay(500)

  expect(wrapper.element.scrollTop).toBeLessThan(1)
  expect(clickHandle).toHaveBeenCalledTimes(1)
})
