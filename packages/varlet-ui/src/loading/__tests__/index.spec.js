import Loading from '..'
import VarLoading from '../Loading'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test loading plugin', () => {
  const app = createApp({}).use(Loading)
  expect(app.component(Loading.name)).toBeTruthy()
})

describe('test loading component props', () => {
  test('test loading color', () => {
    const wrapper = mount(VarLoading, {
      props: { color: 'red' },
    })

    expect(wrapper.find('.var-loading__circle-block').attributes('style')).toContain('color: red;')
    wrapper.unmount()
  })

  test('test loading type', () => {
    ;['circle', 'wave', 'cube', 'rect', 'disappear'].forEach((type) => {
      const wrapper = mount(VarLoading, {
        props: { type },
      })

      expect(wrapper.find('.var-loading__' + type).exists()).toBe(true)
      wrapper.unmount()
    })
  })

  test('test loading size', () => {
    ;['large', 'normal', 'small', 'mini'].forEach((size) => {
      const wrapper = mount(VarLoading, {
        props: { size },
      })

      expect(wrapper.find('.var-loading__circle-block').classes()).toContain(`var-loading__circle-block--${size}`)
      wrapper.unmount()
    })
  })

  test('test loading description', () => {
    const wrapper = mount(VarLoading, {
      props: {
        description: 'This is description',
      },
    })

    expect(wrapper.find('.var-loading__description').element.textContent).toBe('This is description')
    wrapper.unmount()
  })

  test('test loading loading', async () => {
    const wrapper = mount(VarLoading, {
      props: { loading: true },
      slots: {
        default: () => 'This is default slots',
      },
    })

    expect(wrapper.find('.var-loading__content-mask').exists()).toBe(true)
    await wrapper.setProps({ loading: false })
    expect(wrapper.find('.var-loading__content-mask').exists()).toBe(false)
    wrapper.unmount()
  })

  test('test loading radius', () => {
    ;['circle', 'wave', 'cube', 'rect', 'disappear'].forEach(async (type) => {
      const wrapper = mount(VarLoading, {
        props: {
          radius: '20px',
          type,
        },
      })

      type === 'circle'
        ? expect(wrapper.find('.var-loading__circle-block').attributes('style')).toContain('width: 40px; height: 40px;')
        : expect(wrapper.find('.var-loading__circle-block').exists()).toBe(false)
      await wrapper.setProps({ radius: 30 })
      type === 'circle'
        ? expect(wrapper.find('.var-loading__circle-block').attributes('style')).toContain('width: 60px; height: 60px;')
        : expect(wrapper.find('.var-loading__circle-block').exists()).toBe(false)
      wrapper.unmount()
    })
  })
})

describe('test loading component slots', () => {
  test('test loading default slots', () => {
    const wrapper = mount(VarLoading, {
      slots: {
        default: () => 'This is default slots',
      },
    })

    expect(wrapper.find('.var-loading__content').element.textContent).toBe('This is default slots')
    wrapper.unmount()
  })

  test('test loading description slots', () => {
    const wrapper = mount(VarLoading, {
      slots: {
        description: () => 'This is description slots',
      },
    })

    expect(wrapper.find('.var-loading__description').element.textContent).toBe('This is description slots')
    wrapper.unmount()
  })
})
