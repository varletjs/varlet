import Chip from '..'
import VarChip from '../Chip'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { expect, vi } from 'vitest'

test('test chip plugin', () => {
  const app = createApp({}).use(Chip)
  expect(app.component(Chip.name)).toBeTruthy()
})

test('test chip close', async () => {
  const onClose = vi.fn()
  const wrapper = mount(VarChip, {
    props: {
      onClose,
      closeable: true,
    },
  })

  const closeEl = wrapper.find('.var-chip--close')

  expect(closeEl.exists()).toBe(true)
  await closeEl.trigger('click')
  expect(onClose).toHaveBeenCalledTimes(1)

  wrapper.unmount()
})

describe('test chip component props', () => {
  test('test chip type', () => {
    ;['default', 'primary', 'info', 'success', 'warning', 'danger'].forEach((type) => {
      const wrapper = mount(VarChip, {
        props: { type },
      })

      expect(wrapper.find('.var-chip--' + type).exists()).toBe(true)
      wrapper.unmount()
    })
  })

  test('test chip size', () => {
    ;['normal', 'mini', 'small', 'large'].forEach((size) => {
      const wrapper = mount(VarChip, {
        props: { size },
      })

      expect(wrapper.find('.var-chip--' + size).exists()).toBe(true)
      wrapper.unmount()
    })
  })

  test('test chip plain', async () => {
    const wrapper = mount(VarChip, {
      props: {
        plain: true,
      },
    })

    expect(wrapper.find('.var-chip__plain').exists()).toBe(true)
    await wrapper.setProps({ plain: false })
    expect(wrapper.find('.var-chip__plain').exists()).toBe(false)
    wrapper.unmount()
  })

  test('test chip round', async () => {
    const wrapper = mount(VarChip, {
      props: {
        round: true,
      },
    })

    expect(wrapper.find('.var-chip--round').exists()).toBe(true)
    await wrapper.setProps({ round: false })
    expect(wrapper.find('.var-chip--round').exists()).toBe(false)
    wrapper.unmount()
  })

  test('test chip block', async () => {
    const wrapper = mount(VarChip, {
      props: {
        block: true,
      },
    })

    expect(wrapper.find('.var--flex').exists()).toBe(true)
    await wrapper.setProps({ block: false })
    expect(wrapper.find('.var--inline-flex').exists()).toBe(true)
    wrapper.unmount()
  })

  test('test chip closeable', async () => {
    const wrapper = mount(VarChip, {
      props: {
        closeable: true,
      },
    })

    expect(wrapper.find('.var-chip--close').exists()).toBeTruthy()
    await wrapper.setProps({
      closeable: false,
    })
    expect(wrapper.find('.var-chip--close').exists()).toBeFalsy()

    wrapper.unmount()
  })

  test('test chip iconName', async () => {
    const wrapper = mount(VarChip, {
      props: {
        closeable: true,
      },
    })

    expect(wrapper.find('.var-icon-close-circle').exists()).toBe(true)
    await wrapper.setProps({
      iconName: 'delete',
    })
    expect(wrapper.find('.var-icon-delete').exists()).toBe(true)

    wrapper.unmount()
  })

  test('test chip color', async () => {
    const wrapper = mount(VarChip, {
      props: {
        color: 'red',
      },
    })

    expect(wrapper.find('.var-chip').attributes('style')).toContain('background: red;')
    await wrapper.setProps({
      color: 'green',
    })
    expect(wrapper.find('.var-chip').attributes('style')).toContain('background: green;')

    wrapper.unmount()
  })

  test('test chip text color', async () => {
    const wrapper = mount(VarChip, {
      props: {
        textColor: 'red',
      },
    })

    expect(wrapper.find('.var-chip').attributes('style')).toContain('color: red;')
    await wrapper.setProps({
      textColor: 'green',
    })
    expect(wrapper.find('.var-chip').attributes('style')).toContain('color: green;')

    wrapper.unmount()
  })
})

describe('test chip component slots', () => {
  test('test chip default slots', () => {
    const wrapper = mount(VarChip, {
      slots: {
        default: () => 'This is default slots',
      },
    })

    expect(wrapper.find('.var-chip__text-normal').element.textContent).toBe('This is default slots')
    wrapper.unmount()
  })

  test('test chip left slots', () => {
    const wrapper = mount(VarChip, {
      slots: {
        left: () => 'This is left slots',
      },
    })

    expect(wrapper.find('.var-chip').html()).toContain('This is left slots<span class="var-chip__text-normal"></span>')
    wrapper.unmount()
  })

  test('test chip right slots', () => {
    const wrapper = mount(VarChip, {
      slots: {
        right: () => 'This is right slots',
      },
    })

    expect(wrapper.find('.var-chip').html()).toContain('<span class="var-chip__text-normal"></span>This is right slots')
    wrapper.unmount()
  })
})
