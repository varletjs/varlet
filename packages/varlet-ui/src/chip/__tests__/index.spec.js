import example from '../example'
import Chip from '..'
import VarChip from '../Chip'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test chip example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test chip plugin', () => {
  const app = createApp({}).use(Chip)
  expect(app.component(Chip.name)).toBeTruthy()
})

test('test chip close', () => {
  const onClose = jest.fn()

  const wrapper = mount(VarChip, {
    props: {
      onClose,
      closable: true
    },
  })

  const closeEl = wrapper.find('.var-chip--close')

  expect(closeEl.exists()).toBe(true)
  closeEl.trigger('click')
  expect(onClose).toHaveBeenCalledTimes(1)
})


test('test chip color & textColor', () => {
  const wrapper = mount(VarChip, {
    props: {
      color: '#000',
      textColor: '#000',
    },
  })

  expect(wrapper.find('.var-chip').attributes('style')).toMatch('color: rgb(0, 0, 0)')
  expect(wrapper.find('.var-chip').attributes('style')).toMatch('background: rgb(0, 0, 0)')

  expect(wrapper.html()).toMatchSnapshot()
})

test('test chip styles', () => {
  const wrapper = mount(VarChip, {
    props: {
      closable: true,
      size: 'large',
      round: true,
      plain: true,
      block: true,
      iconName: 'fire'
    },
    slots: {
      default: () => 'chip text',
    },
  })

  expect(wrapper.find('.var-chip').classes('var-chip--round')).toBe(true)
  expect(wrapper.find('.var-chip').classes('var-chip--large')).toBe(true)
  expect(wrapper.find('.var-chip').classes('var-chip--plain')).toBe(true)
  expect(wrapper.find('.var-chip--close').exists()).toBe(true)
  expect(wrapper.find('.var-icon-fire').exists()).toBe(true)
  expect(wrapper.text()).toBe('chip text')
  expect(wrapper.html()).toMatchSnapshot()
})
