import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Badge from '..'
import VarBadge from '../Badge'

test('badge plugin', () => {
  const app = createApp({}).use(Badge)
  expect(app.component(Badge.name)).toBeTruthy()
})

describe('test badge component props', () => {
  test('badge type', () => {
    ;['default', 'primary', 'info', 'success', 'warning', 'danger'].forEach((type) => {
      const wrapper = mount(VarBadge, {
        props: { type },
      })

      expect(wrapper.find('.var-badge--' + type).exists()).toBe(true)
      wrapper.unmount()
    })
  })

  test('badge dot', async () => {
    const wrapper = mount(VarBadge, {
      props: {
        dot: true,
      },
    })

    expect(wrapper.find('.var-badge--dot').exists()).toBe(true)
    await wrapper.setProps({ dot: false })
    expect(wrapper.find('.var-badge--dot').exists()).toBe(false)
    wrapper.unmount()
  })

  test('badge hidden', async () => {
    const wrapper = mount(VarBadge, {
      props: {
        hidden: true,
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
    await wrapper.setProps({
      hidden: false,
    })
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.unmount()
  })

  test('badge value', async () => {
    const wrapper = mount(VarBadge, {
      props: {
        value: 10,
        dot: true,
      },
    })

    expect(wrapper.find('.var-badge__content span').exists()).toBeFalsy()
    await wrapper.setProps({ dot: false })
    expect(wrapper.find('.var-badge__content span').text()).toBe('10')
    wrapper.unmount()
  })

  test('badge maxValue', async () => {
    const wrapper = mount(VarBadge, {
      props: {
        maxValue: 1,
        value: 2,
      },
    })

    expect(wrapper.find('.var-badge__content').html()).toContain('<span>1+</span>')
    await wrapper.setProps({ value: 1 })
    expect(wrapper.find('.var-badge__content').html()).toContain(`<span>1</span>`)
    wrapper.unmount()
  })

  test('badge position', () => {
    ;['right-top', 'right-bottom', 'left-top', 'left-bottom'].forEach((position) => {
      const wrapper = mount(VarBadge, {
        props: {
          position,
        },
      })

      expect(wrapper.html()).toMatchSnapshot()
      wrapper.unmount()
    })
  })

  test('badge color', async () => {
    const wrapper = mount(VarBadge, {
      props: { color: 'red' },
    })

    expect(wrapper.find('.var-badge__content').attributes('style')).toContain('background: red;')
    await wrapper.setProps({
      color: 'green',
    })
    expect(wrapper.find('.var-badge__content').attributes('style')).toContain('background: green;')
    wrapper.unmount()
  })

  test('badge offsetX', async () => {
    const wrapper = mount(VarBadge, {
      props: {
        offsetX: 4,
      },
      slots: {
        default: () => 'default slots',
      },
    })

    expect(wrapper.find('.var-badge__content').attributes('style')).toContain('--badge-offset-x: 4px;')

    await wrapper.setProps({
      offsetX: 5,
    })

    expect(wrapper.find('.var-badge__content').attributes('style')).toContain('--badge-offset-x: 5px;')

    wrapper.unmount()
  })

  test('badge offsetY', async () => {
    const wrapper = mount(VarBadge, {
      props: {
        offsetY: 4,
      },
      slots: {
        default: () => 'default slots',
      },
    })

    expect(wrapper.find('.var-badge__content').attributes('style')).toContain('--badge-offset-y: 4px;')

    await wrapper.setProps({
      offsetY: 5,
    })

    expect(wrapper.find('.var-badge__content').attributes('style')).toContain('--badge-offset-y: 5px;')

    wrapper.unmount()
  })

  test('badge icon', () => {
    const wrapper = mount(VarBadge, {
      props: { icon: 'notebook' },
    })

    expect(wrapper.find('.var-icon').classes()).toContain('var-icon-notebook')
    wrapper.unmount()
  })
})

describe('test badge component slots', () => {
  test('badge default slots', () => {
    const wrapper = mount(VarBadge, {
      slots: {
        default: () => 'default slots',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
  })

  test('badge value slots', () => {
    const wrapper = mount(VarBadge, {
      slots: {
        value: () => 'value slots',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
  })
})
