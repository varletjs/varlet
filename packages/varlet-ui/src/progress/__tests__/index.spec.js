import example from '../example'
import Progress from '..'
import VarProgress from '../Progress'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test progress example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test progress plugin', () => {
  const app = createApp({}).use(Progress)
  expect(app.component(Progress.name)).toBeTruthy()
})

test('test linear progress prop', () => {
  const wrapper = mount(VarProgress, {
    props: {
      value: 30,
      lineWidth: 8,
      color: '#ff9800',
      trackColor: '#f5cb90',
      ripple: true,
      label: true,
    },
    slots: {
      default: () => 'success',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('test circle progress prop', () => {
  const wrapper = mount(VarProgress, {
    props: {
      mode: 'circle',
      value: 30,
      lineWidth: 8,
      color: '#ff9800',
      trackColor: '#f5cb90',
      size: 50,
      rotate: 10,
      label: true,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})
