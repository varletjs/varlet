import example from '../example'
import Button from '..'
import VarButton from '../Button'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test button example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test button plugin', () => {
  const app = createApp({}).use(Button)
  expect(app.component(Button.name)).toBeTruthy()
})

test('test button onClick & onTouchstart null callback', () => {
  const wrapper = mount(VarButton)
  wrapper.trigger('click')
  wrapper.trigger('touchstart')
  wrapper.unmount()
})

test('test button onClick & onTouchstart', () => {
  const onClick = jest.fn()
  const onTouchstart = jest.fn()

  const wrapper = mount(VarButton, {
    props: {
      onClick,
      onTouchstart,
    },
  })

  wrapper.trigger('click')
  wrapper.trigger('touchstart')
  expect(onClick).toHaveBeenCalledTimes(1)
  expect(onTouchstart).toHaveBeenCalledTimes(1)
  wrapper.unmount()
})

test('test button disabled', () => {
  const onClick = jest.fn()
  const onTouchstart = jest.fn()

  const wrapper = mount(VarButton, {
    props: {
      disabled: true,
      onClick,
      onTouchstart,
    },
  })

  wrapper.trigger('click')
  wrapper.trigger('touchstart')
  expect(onClick).toHaveBeenCalledTimes(0)
  expect(onTouchstart).toHaveBeenCalledTimes(0)
  wrapper.unmount()
})

test('test button loading', () => {
  const onClick = jest.fn()
  const onTouchstart = jest.fn()

  const wrapper = mount(VarButton, {
    props: {
      loading: true,
    },
  })

  wrapper.trigger('click')
  wrapper.trigger('touchstart')
  expect(onClick).toHaveBeenCalledTimes(0)
  expect(onTouchstart).toHaveBeenCalledTimes(0)
  wrapper.unmount()
})

test('test button color & textColor', () => {
  const wrapper = mount(VarButton, {
    props: {
      color: '#000',
      textColor: '#000',
    },
  })

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

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})
