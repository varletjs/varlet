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

  expect(wrapper.html()).toMatchSnapshot()
})
