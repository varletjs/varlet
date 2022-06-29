import AppBar from '..'
import VarAppBar from '../AppBar'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test appbar use', () => {
  const app = createApp({}).use(AppBar)
  expect(app.component(AppBar.name)).toBeTruthy()
})

describe('test appbar component props', () => {
  test('test appbar color', () => {
    const wrapper = mount(VarAppBar, {
      props: {
        color: 'red',
      },
    })

    expect(wrapper.find('.var-app-bar').attributes('style')).toContain('background: red;')
    wrapper.unmount()
  })

  test('test appbar textColor', () => {
    const wrapper = mount(VarAppBar, {
      props: {
        textColor: 'red',
      },
    })

    expect(wrapper.find('.var-app-bar').attributes('style')).toContain('color: red;')
    wrapper.unmount()
  })

  test('test appbar title', () => {
    const wrapper = mount(VarAppBar, {
      props: {
        title: 'text',
      },
    })

    expect(wrapper.text()).toBe('text')
    wrapper.unmount()
  })

  test('test appbar titlePosition', async () => {
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

  test('test appbar elevation', async () => {
    const wrapper = mount(VarAppBar, {
      props: {
        elevation: true,
      },
    })

    expect(wrapper.classes().includes('var-elevation--3')).toBe(true)

    await wrapper.setProps({
      elevation: false,
    })
    expect(wrapper.classes().includes('var-elevation--3')).toBe(false)

    wrapper.unmount()
  })
})

describe('test appbar slots', () => {
  test('test appbar default slot', () => {
    const wrapper = mount(VarAppBar, {
      slots: {
        default: () => 'This is default slot',
      },
    })

    expect(wrapper.text()).toBe('This is default slot')

    wrapper.unmount()
  })

  test('test appbar left slot', () => {
    const wrapper = mount(VarAppBar, {
      slots: {
        left: () => 'This is left slot',
      },
    })

    expect(wrapper.find('.var-app-bar__left').text()).toBe('This is left slot')

    wrapper.unmount()
  })

  test('test appbar right slot', () => {
    const wrapper = mount(VarAppBar, {
      slots: {
        right: () => 'This is right slot',
      },
    })

    expect(wrapper.find('.var-app-bar__right').text()).toBe('This is right slot')

    wrapper.unmount()
  })
})
