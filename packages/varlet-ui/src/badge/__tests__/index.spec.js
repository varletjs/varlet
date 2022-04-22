import Badge from '..'
import VarBadge from '../Badge'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test badge plugin', () => {
  const app = createApp({}).use(Badge)
  expect(app.component(Badge.name)).toBeTruthy()
})

describe('test badge component props', () => {
  test('test badge value and maxValue', async () => {
    const wrapper = mount(VarBadge, {
      props: {
        value: 72,
      },
    })

    expect(wrapper.find('.var-badge').text()).toBe('72')
    await wrapper.setProps({ maxValue: 60 })
    expect(wrapper.find('.var-badge').text()).toBe('60+')
    wrapper.unmount()
  })

  test('test badge hidden', () => {
    const wrapper = mount(VarBadge, {
      props: {
        hidden: true,
      },
    })

    expect(wrapper.find('.var-badge__content').isVisible()).toBe(false)
    wrapper.unmount()
  })

  test('test badge dot', async () => {
    const wrapper = mount(VarBadge, {
      props: {
        dot: true,
        value: 72,
      },
    })

    expect(wrapper.find('.var-badge__dot--right').exists()).toBe(true)
    await wrapper.setProps({ position: 'left-top' })
    expect(wrapper.find('.var-badge__dot--left').exists()).toBe(true)
    expect(wrapper.find('.var-badge').text()).toBe('')
    wrapper.unmount()
  })

  test('test badge position', async () => {
    const template = `
      <var-badge>
        <div style="width: 100px; height: 30px"></div>
      </var-badge>
    `
    const wrapper = mount({
      components: {
        [VarBadge.name]: VarBadge,
      },
      template,
    })

    await wrapper.setProps({ position: 'right-top' })
    expect(wrapper.find('.var-badge__content').classes()).toContain('var-badge--right-top')
    await wrapper.setProps({ position: 'right-bottom' })
    expect(wrapper.find('.var-badge__content').classes()).toContain('var-badge--right-bottom')
    await wrapper.setProps({ position: 'left-top' })
    expect(wrapper.find('.var-badge__content').classes()).toContain('var-badge--left-top')
    await wrapper.setProps({ position: 'left-bottom' })
    expect(wrapper.find('.var-badge__content').classes()).toContain('var-badge--left-bottom')
    wrapper.unmount()
  })

  test('test badge color and icon', () => {
    const wrapper = mount(VarBadge, {
      props: {
        color: 'red',
        icon: 'notebook',
      },
    })
    expect(wrapper.find('.var-badge__content').attributes('style')).toContain('background: red;')
    expect(wrapper.find('.var-icon').classes()).toContain('var-icon-notebook')
    wrapper.unmount()
  })
})

test('test badge default slots', () => {
  const wrapper = mount(VarBadge, {
    slots: {
      default: () => '',
    },
  })

  expect(wrapper.find('.var-badge__content').element.textContent).toBe('0')
  wrapper.unmount()
})
