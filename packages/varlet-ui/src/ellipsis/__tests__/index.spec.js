import VarEllipsis from '../Ellipsis.vue'
import Ellipsis from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test ellipsis plugin', () => {
  const app = createApp({}).use(Ellipsis)
  expect(app.component(Ellipsis.name)).toBeTruthy()
})

test('test ellipsis single line', () => {
  expect(mount(VarEllipsis, { slots: { default: () => 'hello' } }).html()).toMatchSnapshot()
})

test('test ellipsis lineClamp', () => {
  expect(mount(VarEllipsis, { props: { lineClamp: 3 }, slots: { default: () => 'hello' } }).html()).toMatchSnapshot()
})

test('test ellipsis expandTrigger equals click', async () => {
  const wrapper = mount(VarEllipsis, { props: { expandTrigger: 'click' }, slots: { default: () => 'hello' } })

  expect(wrapper.html()).toMatchSnapshot()
  await wrapper.find('.var-ellipsis').trigger('click')
  expect(wrapper.html()).toMatchSnapshot()
})

test('test ellipsis expandTrigger equals undefined', async () => {
  const wrapper = mount(VarEllipsis, { props: { expandTrigger: undefined }, slots: { default: () => 'hello' } })

  expect(wrapper.html()).toMatchSnapshot()
  await wrapper.find('.var-ellipsis').trigger('click')
  expect(wrapper.html()).toMatchSnapshot()
})

test('test ellipsis tooltip equals false', () => {
  const wrapper = mount(VarEllipsis, { props: { tooltip: false } })
  expect(wrapper.vm.tooltip).toStrictEqual({ disabled: true })
})

test('test ellipsis tooltip equals true', () => {
  const wrapper = mount(VarEllipsis, { props: { tooltip: true } })
  expect(wrapper.vm.tooltip).toStrictEqual({ sameWidth: true })
})

test('test ellipsis tooltip equals object', () => {
  const wrapper = mount(VarEllipsis, { props: { tooltip: { type: 'primary' } } })
  expect(wrapper.vm.tooltip).toStrictEqual({ sameWidth: true, type: 'primary' })
})
