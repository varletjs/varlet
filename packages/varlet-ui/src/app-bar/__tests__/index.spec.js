import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import AppBar from '..'
import VarAppBar from '../AppBar'

test('app bar use', () => {
  const app = createApp({}).use(AppBar)
  expect(app.component(AppBar.name)).toBeTruthy()
})

describe('test app bar component props', () => {
  test('app bar color', () => {
    const wrapper = mount(VarAppBar, {
      props: {
        color: 'red',
      },
    })

    expect(wrapper.find('.var-app-bar').attributes('style')).toContain('background: red;')
    wrapper.unmount()
  })

  test('app bar round', () => {
    const wrapper = mount(VarAppBar, {
      props: {
        round: true,
      },
    })

    expect(wrapper.find('.var-app-bar').classes('var-app-bar--round')).toBeTruthy()
    wrapper.unmount()
  })

  test('app bar border', () => {
    const wrapper = mount(VarAppBar, {
      props: {
        border: true,
      },
    })

    expect(wrapper.find('.var-app-bar').classes('var-app-bar--border')).toBeTruthy()
    wrapper.unmount()
  })

  test('app bar textColor', () => {
    const wrapper = mount(VarAppBar, {
      props: {
        textColor: 'red',
      },
    })

    expect(wrapper.find('.var-app-bar').attributes('style')).toContain('color: red;')
    wrapper.unmount()
  })

  test('app bar title', () => {
    const wrapper = mount(VarAppBar, {
      props: {
        title: 'text',
      },
    })

    expect(wrapper.text()).toBe('text')
    wrapper.unmount()
  })

  test('app bar titlePosition', async () => {
    const wrapper = mount(VarAppBar, {
      props: {
        titlePosition: 'left',
        title: 'text',
      },
    })

    expect(wrapper.find('.var-app-bar__left').text()).toBe('text')

    await wrapper.setProps({
      titlePosition: 'right',
    })
    expect(wrapper.find('.var-app-bar__right').text()).toBe('text')

    await wrapper.setProps({
      titlePosition: 'center',
    })
    expect(wrapper.find('.var-app-bar__title').text()).toBe('text')

    wrapper.unmount()
  })

  test('app bar elevation', async () => {
    const wrapper = mount(VarAppBar, {
      props: {
        elevation: true,
      },
    })

    expect(wrapper.find('.var-elevation--3').exists()).toBe(true)

    await wrapper.setProps({
      elevation: false,
    })
    expect(wrapper.find('.var-elevation--3').exists()).toBe(false)

    wrapper.unmount()
  })

  test('app bar image and image-linear-gradient', () => {
    const wrapper = mount(VarAppBar, {
      props: {
        image: 'https://1.png',
        imageLinearGradient: 'to right top, rgba(29, 68, 147, 0.5) 0%, rgba(74, 198, 170, 0.9) 100%',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('app bar fixed', async () => {
    const wrapper = mount(VarAppBar)

    expect(wrapper.find('.var-app-bar--fixed').exists()).toBe(false)

    await wrapper.setProps({
      fixed: true,
    })

    expect(wrapper.find('.var-app-bar--fixed').exists()).toBe(true)

    wrapper.unmount()
  })

  test('app-bar placeholder', async () => {
    const wrapper = mount(VarAppBar, {
      props: {
        placeholder: true,
        fixed: true,
      },
    })

    expect(wrapper.find('.var-app-bar__placeholder').exists()).toBe(true)
    await wrapper.setProps({ placeholder: false, fixed: false })
    expect(wrapper.find('.var-app-bar__placeholder').exists()).toBe(false)
    await wrapper.setProps({ placeholder: true, fixed: false })
    expect(wrapper.find('.var-app-bar__placeholder').exists()).toBe(false)

    wrapper.unmount()
  })

  test('app bar z-index', async () => {
    const wrapper = mount(VarAppBar)

    expect(wrapper.find('.var-app-bar').attributes('style')).toContain('z-index: 1')

    await wrapper.setProps({
      zIndex: 3,
    })

    expect(wrapper.find('.var-app-bar').attributes('style')).toContain('z-index: 3')

    wrapper.unmount()
  })
})

describe('test app bar slots', () => {
  test('app bar default slot', () => {
    const wrapper = mount(VarAppBar, {
      slots: {
        default: () => 'This is default slot',
      },
    })

    expect(wrapper.text()).toBe('This is default slot')

    wrapper.unmount()
  })

  test('app bar left slot', () => {
    const wrapper = mount(VarAppBar, {
      slots: {
        left: () => 'This is left slot',
      },
    })

    expect(wrapper.find('.var-app-bar__left').text()).toBe('This is left slot')

    wrapper.unmount()
  })

  test('app bar right slot', () => {
    const wrapper = mount(VarAppBar, {
      slots: {
        right: () => 'This is right slot',
      },
    })

    expect(wrapper.find('.var-app-bar__right').text()).toBe('This is right slot')

    wrapper.unmount()
  })

  test('app bar content slot', () => {
    const wrapper = mount(VarAppBar, {
      slots: {
        content: () => 'This is content slot',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()

    wrapper.unmount()
  })
})
