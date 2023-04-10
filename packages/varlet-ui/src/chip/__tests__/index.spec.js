import Chip from '..'
import VarChip from '../Chip'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test chip plugin', () => {
  const app = createApp({}).use(Chip)
  expect(app.component(Chip.name)).toBeTruthy()
})

test('test chip close', () => {
  const onClose = jest.fn()
  const wrapper = mount(VarChip, {
    props: {
      onClose,
      closable: true,
    },
  })
  const closeEl = wrapper.find('.var-chip--close')

  expect(closeEl.exists()).toBe(true)
  closeEl.trigger('click')
  expect(onClose).toHaveBeenCalledTimes(1)
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

    expect(wrapper.find('.var-chip').attributes('closeable')).toContain('true')
    await wrapper.setProps({ closeable: false })
    expect(wrapper.find('.var-chip').attributes('closeable')).toContain('false')
    wrapper.unmount()
  })

  test('test chip close name', async () => {
    const wrapper = mount(VarChip, {
      props: {
        closeable: true,
        closeName: 'This is close name',
      },
    })

    expect(wrapper.find('.var-chip').attributes('closename')).toBe('This is close name')
    expect(wrapper.find('.var-chip').attributes('closeable')).toContain('true')
    await wrapper.setProps({ closeable: false })
    expect(wrapper.find('.var-chip').attributes('closeable')).toContain('false')
    wrapper.unmount()
  })

  test('test chip color', () => {
    const wrapper = mount(VarChip, {
      props: {
        color: 'red',
      },
    })

    expect(wrapper.find('.var-chip').attributes('style')).toContain('background: red;')
    wrapper.unmount()
  })

  test('test chip text color', () => {
    const wrapper = mount(VarChip, {
      props: {
        textColor: 'red',
      },
    })

    expect(wrapper.find('.var-chip').attributes('style')).toContain('color: red;')
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
