import example from '../example'
import Cell from '..'
import VarCell from '../Cell'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test cell example', () => {
  const wrapper = mount(example)

  expect(wrapper.html()).toMatchSnapshot()
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
      icon: 'fire'
    },
    slots: {
      extra: () => 'text'
    }
  })


  expect(wrapper.html()).toMatchSnapshot()
})
