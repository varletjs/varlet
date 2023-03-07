import Badge from '..'
import VarBadge from '../Badge'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test badge plugin', () => {
  const app = createApp({}).use(Badge)
  expect(app.component(Badge.name)).toBeTruthy()
})

describe('test badge component props', () => {
  test('test badge type', () => {
    ;['default', 'primary', 'info', 'success', 'warning', 'danger'].forEach((type) => {
      const wrapper = mount(VarBadge, {
        props: { type },
      })

      expect(wrapper.find('.var-badge--' + type).exists()).toBe(true)
      wrapper.unmount()
    })
  })

  test('test badge dot', async () => {
    const wrapper = mount(VarBadge, {
      props: {
        dot: true,
      },
    })

    expect(wrapper.find('.var-badge__dot').exists()).toBe(true)
    await wrapper.setProps({ dot: false })
    expect(wrapper.find('.var-badge__dot').exists()).toBe(false)
    wrapper.unmount()
  })

  test('test badge value', () => {
    ;[1, '2'].forEach(async (value) => {
      const wrapper = mount(VarBadge, {
        props: {
          value,
          dot: true,
        },
      })

      expect(wrapper.find('.var-badge__content').html()).toContain('<span></span>')
      await wrapper.setProps({ dot: false })
      expect(wrapper.find('.var-badge__content').html()).toContain(`<span>${value}</span>`)
      wrapper.unmount()
    })
  })

  test('test badge max value', async () => {
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

  test('test badge max length', async () => {
    const wrapper = mount(VarBadge, {
      props: {
        maxLength: 3,
        value: 'abcdefg',
      },
    })
    expect(wrapper.find('.var-badge__content').html()).toContain('<span>abc...</span>')
    await wrapper.setProps({ value: 'ab' })
    expect(wrapper.find('.var-badge__content').html()).toContain(`<span>ab</span>`)
  })

  test('test badge position', () => {
    ;['right-top', 'right-bottom', 'left-top', 'left-bottom'].forEach(async (position) => {
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

      await wrapper.setProps({ position })
      expect(wrapper.find('.var-badge__content').classes()).toContain('var-badge--' + position)
      wrapper.unmount()
    })
  })

  test('test badge color', () => {
    const wrapper = mount(VarBadge, {
      props: { color: 'red' },
    })

    expect(wrapper.find('.var-badge__content').attributes('style')).toContain('background: red;')
    wrapper.unmount()
  })

  test('test badge icon', () => {
    const wrapper = mount(VarBadge, {
      props: { icon: 'notebook' },
    })

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
