import example from '../example'
import Icon from '..'
import VarIcon from '../Icon'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay } from '../../utils/jest'

test('test icon example', () => {
  const wrapper = mount(example)

  expect(wrapper.html()).toMatchSnapshot()
})

test('test icon plugin', () => {
  const app = createApp({}).use(Icon)
  expect(app.component(Icon.name)).toBeTruthy()
})

test('test icon onClick', () => {
  const onClick = jest.fn()

  const wrapper = mount(VarIcon, {
    props: {
      onClick,
    },
  })

  wrapper.trigger('click')
  expect(onClick).toHaveBeenCalledTimes(1)
})

test('test icon transition name', async () => {
  const wrapper = mount(VarIcon, {
    props: {
      transition: 0,
      name: 'check',
    },
  })

  expect(wrapper.find('.var-icon-check').exists()).toBeTruthy()
  expect(wrapper.element.style.transition).toEqual('all 0ms')

  await wrapper.setProps({
    transition: 300,
    name: 'error',
  })

  await delay(400)

  expect(wrapper.find('.var-icon-error').exists()).toBeTruthy()
  expect(wrapper.element.style.transition).toEqual('all 300ms')
})

test('test icon namespace', () => {
  const wrapper = mount(VarIcon, {
    props: {
      name: 'check',
      namespace: 'custom-icon',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test icon styles', () => {
  const wrapper = mount(VarIcon, {
    props: {
      color: '#000',
      size: '36px',
      name: 'check',
      transition: 0,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})
