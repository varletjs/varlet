import example from '../example'
import Cell from '..'
import VarCell from '../Cell'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test cell example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test cell plugin', () => {
  const app = createApp({}).use(Cell)
  expect(app.component(Cell.name)).toBeTruthy()
})

test('test cell props', async () => {
  const wrapper = mount(VarCell, {
    props: {
      title: 'This is Cell',
      desc: 'This is desc',
      border: true,
      iconClass: 'test-icon-class',
      titleClass: 'test-title-class',
      descClass: 'test-desc-class',
      extraClass: 'test-extra-class',
      icon: 'fire',
    },
    slots: {
      extra: () => 'text',
    },
  })
  expect(wrapper.find('.var-icon').exists()).toBe(true)
  expect(wrapper.find('.var-icon').classes('var-icon-fire')).toBe(true)
  expect(wrapper.classes('var-cell--border')).toBe(true)
  expect(wrapper.find('.var-cell__title').text()).toBe('This is Cell')
  expect(wrapper.find('.var-cell__desc').text()).toBe('This is desc')
  expect(wrapper.find('.test-extra-class').text()).toBe('text')
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})
