import AppBar from '..'
import VarAppBar from '../AppBar'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test app bar use', () => {
  const app = createApp({}).use(AppBar)
  expect(app.component(AppBar.name)).toBeTruthy()
})

describe('test app bar component props', () => {
  test('test app bar color', () => {
    const wrapper = mount(VarAppBar, {
      props: {
        color: 'red',
      },
    })

    expect(wrapper.find('.var-app-bar').attributes('style')).toContain('background: red;')
    wrapper.unmount()
  })

  test('test app bar round', () => {
    const wrapper = mount(VarAppBar, {
      props: {
        round: true,
      },
    })

    expect(wrapper.find('.var-app-bar').classes('var-app-bar--round')).toBeTruthy()
    wrapper.unmount()
  })

  test('test app bar textColor', () => {
    const wrapper = mount(VarAppBar, {
      props: {
        textColor: 'red',
      },
    })

    expect(wrapper.find('.var-app-bar').attributes('style')).toContain('color: red;')
    wrapper.unmount()
  })

  test('test app bar title', () => {
    const wrapper = mount(VarAppBar, {
      props: {
        title: 'text',
      },
    })

    expect(wrapper.text()).toBe('text')
    wrapper.unmount()
  })

  test('test app bar titlePosition', async () => {
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

  test('test app bar elevation', async () => {
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

  test('test app bar image and image-linear-gradient', () => {
    const wrapper = mount(VarAppBar, {
      props: {
        image: 'https://1.png',
        imageLinearGradient: 'to right top, rgba(29, 68, 147, 0.5) 0%, rgba(74, 198, 170, 0.9) 100%',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('test app bar slots', () => {
  test('test app bar default slot', () => {
    const wrapper = mount(VarAppBar, {
      slots: {
        default: () => 'This is default slot',
      },
    })

    expect(wrapper.text()).toBe('This is default slot')

    wrapper.unmount()
  })

  test('test app bar left slot', () => {
    const wrapper = mount(VarAppBar, {
      slots: {
        left: () => 'This is left slot',
      },
    })

    expect(wrapper.find('.var-app-bar__left').text()).toBe('This is left slot')

    wrapper.unmount()
  })

  test('test app bar right slot', () => {
    const wrapper = mount(VarAppBar, {
      slots: {
        right: () => 'This is right slot',
      },
    })

    expect(wrapper.find('.var-app-bar__right').text()).toBe('This is right slot')

    wrapper.unmount()
  })

  test('test app bar content slot', () => {
    const wrapper = mount(VarAppBar, {
      slots: {
        content: () => 'This is content slot',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()

    wrapper.unmount()
  })
})
