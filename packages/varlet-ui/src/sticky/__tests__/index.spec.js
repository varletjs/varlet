import Sticky from '..'
import VarSticky from '../Sticky'
import { delay, trigger } from '../../utils/jest'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

const mockRect = (top) => {
  const origin = HTMLElement.prototype.getBoundingClientRect
  Object.defineProperty(HTMLElement.prototype, 'getBoundingClientRect', {
    configurable: true,
    value: () => ({ top, left: 0 }),
  })

  return {
    restore() {
      Object.defineProperty(HTMLElement.prototype, 'getBoundingClientRect', {
        configurable: true,
        value: origin,
      })
    },
  }
}

test('test sticky use', () => {
  const app = createApp({}).use(Sticky)
  expect(app.component(Sticky.name)).toBeTruthy()
})

describe('test sticky component props', () => {
  let rect = mockRect(200)

  test('test sticky offset-top', async () => {
    const wrapper = mount(VarSticky, {
      props: {
        offsetTop: 100,
      },
    })
    await delay(60)
    expect(wrapper.find('.var-sticky__wrapper').attributes('style')).not.toContain('top: 100px;')
    rect.restore()

    rect = mockRect(99)
    await trigger(window, 'scroll')
    expect(wrapper.find('.var-sticky__wrapper').attributes('style')).toContain('top: 100px;')
    wrapper.unmount()
    rect.restore()
  })

  test('test sticky z-index', async () => {
    const wrapper = mount(VarSticky, {
      props: {
        zIndex: 200,
      },
    })
    await delay(60)

    expect(wrapper.find('.var-sticky').attributes('style')).toContain('z-index: 200;')
    expect(wrapper.find('.var-sticky__wrapper').attributes('style')).toContain('z-index: 200;')
    await wrapper.setProps({ zIndex: '100' })
    expect(wrapper.find('.var-sticky').attributes('style')).toContain('z-index: 100;')
    expect(wrapper.find('.var-sticky__wrapper').attributes('style')).toContain('z-index: 100;')
    wrapper.unmount()
  })

  test('test sticky css-mode', async () => {
    const wrapper = mount(VarSticky, {
      props: {
        cssMode: true,
      },
    })
    await delay(60)

    expect(wrapper.find('.var-sticky--css-mode').exists()).toBe(true)
    await wrapper.setProps({ cssMode: false })
    expect(wrapper.find('.var-sticky--css-mode').exists()).toBe(false)
    wrapper.unmount()
  })

  test('test sticky disabled', async () => {
    let rect = mockRect(200)

    const wrapper = mount(VarSticky, {
      props: {
        offsetTop: 100,
        disabled: false,
      },
    })
    await delay(60)

    expect(wrapper.find('.var-sticky__wrapper').attributes('style')).not.toContain('top: 100px;')
    rect.restore()
    rect = mockRect(99)
    await trigger(window, 'scroll')
    expect(wrapper.find('.var-sticky__wrapper').attributes('style')).toContain('top: 100px;')
    await wrapper.setProps({ disabled: true })
    expect(wrapper.find('.var-sticky__wrapper').attributes('style')).not.toContain('top: 100px;')
    wrapper.unmount()
    rect.restore()
  })
})
