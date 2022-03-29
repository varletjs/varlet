import example from '../example'
import BackTop from '..'
import VarBackTop from '../BackTop'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay, mockScrollTo } from '../../utils/jest'

test('test backTop plugin', () => {
  const app = createApp({}).use(BackTop)
  expect(app.component(BackTop.name)).toBeTruthy()
})

test('test backTop example', () => {
  const wrapper = mount(example, { attachTo: document.body })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('test backTop props', async () => {
  mockScrollTo(HTMLDivElement)

  const template = `
    <div class="back-top__test" style="height: 300px; overflow: auto">
      <div style="height: 5000px"></div>
      <var-back-top target=".back-top__test" :duration="500" visibility-height="500" @click="clickHandle" />
    </div>
  `
  const clickHandle = jest.fn()

  const wrapper = mount(
    {
      components: {
        [VarBackTop.name]: VarBackTop,
      },
      methods: {
        clickHandle,
      },
      template,
    },
    { attachTo: document.body }
  )

  await delay(0)

  const backTopEl = document.querySelector('.var-back-top')

  expect(backTopEl.classList.contains('var-back-top--active')).toBe(false)

  wrapper.element.scrollTop = 600

  await wrapper.trigger('scroll')

  await delay(500)

  expect(backTopEl.classList.contains('var-back-top--active')).toBe(true)

  await backTopEl.click()

  await delay(500)

  expect(wrapper.element.scrollTop).toBeLessThan(1)

  expect(clickHandle).toHaveBeenCalledTimes(1)

  wrapper.unmount()
})
