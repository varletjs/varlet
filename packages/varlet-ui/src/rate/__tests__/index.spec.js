import Rate from '..'
import VarRate from '../Rate'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay, trigger } from '../../utils/jest'

test('test rate use', () => {
  const app = createApp({}).use(Rate)
  expect(app.component(Rate.name)).toBeTruthy()
})

test('test rate component onchange event', async () => {
  const onChange = jest.fn()
  const onUpdateModelValue = jest.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarRate, {
    props: {
      modelValue: 0,
      onChange,
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.find('.var-rate__content').trigger('click')
  expect(onChange).toHaveBeenCalledTimes(1)
  expect(wrapper.props('modelValue')).toBe(1)

  wrapper.unmount()
})

test('test rate validation', async () => {
  const onChange = jest.fn()
  const onUpdateModelValue = jest.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarRate, {
    props: {
      modelValue: 0,
      rules: [(v) => v >= 1 || '至少选择一分'],
      onChange,
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  wrapper.vm.validate()
  await delay(16)
  expect(wrapper.find('.var-form-details__message').text()).toBe('至少选择一分')
  await wrapper.find('.var-rate__content').trigger('click')
  await delay(16)
  expect(wrapper.find('.var-form-details__message').exists()).toBeFalsy()
  wrapper.vm.reset()
  await delay(16)
  expect(wrapper.props('modelValue')).toBe(0)

  wrapper.unmount()
})

describe('test rate component props', () => {
  test('test rate half', async () => {
    const onChange = jest.fn()
    const onUpdateModelValue = jest.fn((value) => wrapper.setProps({ modelValue: value }))

    const wrapper = mount(VarRate, {
      props: {
        half: true,
        modelValue: 0,
        onChange,
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    await trigger(wrapper.find('.var-rate__content'), 'click')
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onUpdateModelValue).toHaveBeenCalledTimes(1)
    expect(wrapper.props('modelValue')).toBe(0.5)

    wrapper.unmount()
  })

  test('test rate disabled & readonly', async () => {
    const onChange = jest.fn()

    const wrapper = mount(VarRate, {
      props: {
        disabled: true,
        readonly: false,
        onChange,
      },
    })

    await wrapper.find('.var-rate__content').trigger('click')
    expect(onChange).toHaveBeenCalledTimes(0)

    await wrapper.setProps({ disabled: false, readonly: true })
    await wrapper.find('.var-rate__content').trigger('click')
    expect(onChange).toHaveBeenCalledTimes(0)

    wrapper.unmount()
  })

  test('test rate count', () => {
    const wrapper = mount(VarRate, {
      props: {
        count: 10,
      },
    })

    expect(wrapper.findAll('.var-rate__content').length).toBe(10)

    wrapper.unmount()
  })

  test('test rate gap', () => {
    const wrapper = mount(VarRate, {
      props: {
        gap: 10,
      },
    })

    const el = wrapper.find('.var-rate__content')
    expect(el.attributes('style')).toMatch(/(margin-right: 10px)(.*)/)

    wrapper.unmount()
  })
})
