import example from '../example'
import Button from '..'
import VarButton from '../Button'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay, trigger } from '../../utils/jest'

test('test button example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test button plugin', () => {
  const app = createApp({}).use(Button)
  expect(app.component(Button.name)).toBeTruthy()
})

test('test button onClick & onTouchstart null callback', async () => {
  const wrapper = mount(VarButton)
  await trigger(wrapper, 'click')
  await trigger(wrapper, 'touchstart')
  wrapper.unmount()
})

test('test button onClick & onTouchstart', async () => {
  const onClick = jest.fn()
  const onTouchstart = jest.fn()

  const wrapper = mount(VarButton, {
    props: {
      onClick,
      onTouchstart,
    },
  })

  await trigger(wrapper, 'click')
  await trigger(wrapper, 'touchstart')
  expect(onClick).toHaveBeenCalledTimes(1)
  expect(onTouchstart).toHaveBeenCalledTimes(1)
  wrapper.unmount()
})

test('test button disabled', async () => {
  const onClick = jest.fn()
  const onTouchstart = jest.fn()

  const wrapper = mount(VarButton, {
    props: {
      disabled: true,
      onClick,
      onTouchstart,
    },
  })

  await trigger(wrapper, 'click')
  await trigger(wrapper, 'touchstart')
  expect(wrapper.classes()).toContain('var-button--disabled')
  expect(onClick).toHaveBeenCalledTimes(0)
  expect(onTouchstart).toHaveBeenCalledTimes(0)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test button loading', async () => {
  const onClick = jest.fn()
  const onTouchstart = jest.fn()

  const wrapper = mount(VarButton, {
    props: {
      loading: true,
    },
  })

  await trigger(wrapper, 'click')
  await trigger(wrapper, 'touchstart')
  expect(wrapper.find('.var-loading').exists()).toBeTruthy()
  expect(onClick).toHaveBeenCalledTimes(0)
  expect(onTouchstart).toHaveBeenCalledTimes(0)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test button auto-loading', async () => {
  const onClick = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 100)
    })
  }

  const onTouchstart = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 100)
    })
  }

  const wrapper = mount(VarButton, {
    props: {
      autoLoading: true,
      onClick,
      onTouchstart,
      ripple: false,
    },
  })

  await trigger(wrapper, 'click')
  expect(wrapper.find('.var-loading').exists()).toBeTruthy()
  await delay(100)
  expect(wrapper.find('.var-loading').exists()).toBeFalsy()

  await trigger(wrapper, 'touchstart')
  expect(wrapper.find('.var-loading').exists()).toBeTruthy()
  await delay(100)
  expect(wrapper.find('.var-loading').exists()).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test button color & textColor', () => {
  const wrapper = mount(VarButton, {
    props: {
      color: '#000',
      textColor: '#000',
    },
  })
  expect(wrapper.attributes('style')).toMatch('color: rgb(0, 0, 0)')
  expect(wrapper.attributes('style')).toMatch('background: rgb(0, 0, 0)')
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test button styles', () => {
  const wrapper = mount(VarButton, {
    props: {
      size: 'large',
      round: true,
      text: true,
      block: true,
    },
    slots: {
      default: () => 'button text',
    },
  })
  expect(wrapper.classes()).toContain('var-button--round')
  expect(wrapper.classes()).toContain('var-button--text')
  expect(wrapper.classes()).toContain('var-button--block')
  expect(wrapper.classes()).toContain('var-button--large')
  expect(wrapper.text()).toBe('button text')
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})
