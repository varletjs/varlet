import example from '../example'
import Button from '..'
import VarButton from '../Button'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test button example',() => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test button plugin',() => {
  const app = createApp({}).use(Button)
  expect(app.component('VarButton')).toBeTruthy()
})

test('test button click & touchstart', () => {
  const wrapper = mount(VarButton)
  wrapper.trigger('click')
  wrapper.trigger('touchstart')
})

test('test button onClick & onTouchstart',() => {
  const onClick = jest.fn()
  const onTouchstart = jest.fn()

  const wrapper = mount(VarButton, {
    props: {
      onClick,
      onTouchstart
    }
  })

  wrapper.trigger('click')
  wrapper.trigger('touchstart')
  expect(onClick).toHaveBeenCalledTimes(1)
  expect(onTouchstart).toHaveBeenCalledTimes(1)
})

test('test button disabled', () => {
  const onClick = jest.fn()
  const onTouchstart = jest.fn()

  const wrapper = mount(VarButton, {
    props: {
      disabled: true,
      onClick,
      onTouchstart
    }
  })

  wrapper.trigger('click')
  wrapper.trigger('touchstart')
  expect(onClick).toHaveBeenCalledTimes(0)
  expect(onTouchstart).toHaveBeenCalledTimes(0)
})

test('test button loading', () => {
  const onClick = jest.fn()
  const onTouchstart = jest.fn()

  const wrapper = mount(VarButton, {
    props: {
      loading: true
    }
  })

  wrapper.trigger('click')
  wrapper.trigger('touchstart')
  expect(onClick).toHaveBeenCalledTimes(0)
  expect(onTouchstart).toHaveBeenCalledTimes(0)
})

test('test button color & textColor', () => {
  const wrapper = mount(VarButton, {
    props: {
      color: '#000',
      textColor: '#000',
    }
  })

  expect(wrapper).toMatchSnapshot()
})

test('test button size & text & block & round', () => {
  const wrapper = mount(VarButton, {
    props: {
      size: 'large',
      round: true,
      text: true,
      block: true,
    }
  })

  expect(wrapper).toMatchSnapshot()
})
