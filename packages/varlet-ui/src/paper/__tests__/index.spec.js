import Paper from '..'
import VarPaper from '../Paper'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test paper use', () => {
  const app = createApp({}).use(Paper)
  expect(app.component(Paper.name)).toBeTruthy()
})

test('test paper elevation', () => {
  expect(mount(VarPaper, { props: { elevation: 2 } }).html()).toMatchSnapshot()
})

test('test paper size', () => {
  expect(mount(VarPaper, { props: { width: 100, height: 100 } }).html()).toMatchSnapshot()
})

test('test paper round', () => {
  expect(mount(VarPaper, { props: { round: true } }).html()).toMatchSnapshot()
})

test('test paper inline', () => {
  expect(mount(VarPaper, { props: { inline: true } }).html()).toMatchSnapshot()
})

test('test paper radius', () => {
  expect(mount(VarPaper, { props: { radius: 10 } }).html()).toMatchSnapshot()
})

test('test paper onClick', () => {
  const onClick = jest.fn()

  const wrapper = mount(VarPaper, {
    props: {
      onClick,
    },
  })

  wrapper.trigger('click')
  expect(onClick).toBeCalledTimes(1)
})
