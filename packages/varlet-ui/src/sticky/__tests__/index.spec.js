import Sticky from '..'
import VarSticky from '../Sticky'
import { delay } from '../../utils/jest'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

const makeScroll = async (dom, name, offset) => {
  dom[name] = offset
  window.dispatchEvent(
    new CustomEvent('scroll', {
      detail: {
        target: {
          [name]: offset,
        },
      },
    })
  )

  return await delay(100)
}

test('test sticky use', () => {
  const app = createApp({}).use(Sticky)
  expect(app.component(Sticky.name)).toBeTruthy()
})

describe('test sticky component props', () => {
  test('test sticky offset-top', async () => {
    const wrapper = mount(VarSticky, {
      props: {
        offsetTop: 100,
      },
      slots: {
        default: () => 'This is default slots',
      },
      attachTo: document.body,
    })

    expect(wrapper.find('.var-sticky__wrapper').attributes('style')).not.toContain('top: 100px;')
    await makeScroll(document.documentElement, 'scrollTop', 200)
    expect(wrapper.find('.var-sticky__wrapper').attributes('style')).toContain('top: 100px;')
    wrapper.unmount()
  })

  test('test sticky z-index', async () => {
    const wrapper = mount(VarSticky, {
      props: {
        zIndex: 200,
      },
      attachTo: document.body,
    })

    expect(wrapper.find('.var-sticky').attributes('style')).toContain('z-index: 200;')
    expect(wrapper.find('.var-sticky__wrapper').attributes('style')).toContain('z-index: 200;')
    await makeScroll(document.documentElement, 'scrollTop', 0)
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
      attachTo: document.body,
    })

    expect(wrapper.find('.var-sticky--css-mode').exists()).toBe(true)
    await makeScroll(document.documentElement, 'scrollTop', 0)
    await wrapper.setProps({ cssMode: false })
    expect(wrapper.find('.var-sticky--css-mode').exists()).toBe(false)
    wrapper.unmount()
  })

  test('test sticky disabled', async () => {
    const wrapper = mount(VarSticky, {
      props: {
        offsetTop: 100,
        disabled: false,
      },
      slots: {
        default: () => 'This is default slots',
      },
      attachTo: document.body,
    })

    expect(wrapper.find('.var-sticky__wrapper').attributes('style')).not.toContain('top: 100px;')
    await makeScroll(document.documentElement, 'scrollTop', 200)
    expect(wrapper.find('.var-sticky__wrapper').attributes('style')).toContain('top: 100px;')
    await wrapper.setProps({ disabled: true })
    expect(wrapper.find('.var-sticky__wrapper').attributes('style')).not.toContain('top: 100px;')
    wrapper.unmount()
  })
})
