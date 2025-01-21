import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import Rate from '..'
import { delay, trigger } from '../../utils/test'
import VarRate from '../Rate'

test('rate use', () => {
  const app = createApp({}).use(Rate)
  expect(app.component(Rate.name)).toBeTruthy()
})

describe('test rate component props', () => {
  test('rate modelValue', async () => {
    const wrapper = mount(VarRate, {
      props: {
        modelValue: 3,
      },
    })

    expect(wrapper.findAll('.var-rate--primary').length).toBe(3)
    expect(wrapper.props('modelValue')).toBe(3)

    await wrapper.setProps({
      modelValue: 4,
    })
    expect(wrapper.findAll('.var-rate--primary').length).toBe(4)
    expect(wrapper.props('modelValue')).toBe(4)

    wrapper.unmount()
  })

  test('rate icon', async () => {
    const wrapper = mount(VarRate, {
      props: {
        modelValue: 1,
      },
    })

    expect(wrapper.findAll('.var-icon-star').length).toBe(1)

    await wrapper.setProps({
      icon: 'thumb-up',
    })
    expect(wrapper.findAll('.var-icon-thumb-up').length).toBe(1)

    wrapper.unmount()
  })

  test('rate color', async () => {
    const wrapper = mount(VarRate, {
      props: {
        modelValue: 1,
        color: 'red',
      },
    })

    expect(wrapper.find('.var-rate__content').attributes('style')).toContain('color: red')

    await wrapper.setProps({
      color: 'green',
    })
    expect(wrapper.find('.var-rate__content').attributes('style')).toContain('color: green')

    wrapper.unmount()
  })

  test('rate emptyIcon', async () => {
    const wrapper = mount(VarRate)

    expect(wrapper.findAll('.var-icon-star-outline').length).toBe(5)

    await wrapper.setProps({
      emptyIcon: 'thumb-up-outline',
    })
    expect(wrapper.findAll('.var-icon-thumb-up-outline').length).toBe(5)

    wrapper.unmount()
  })

  test('rate emptyColor', async () => {
    const wrapper = mount(VarRate, {
      props: {
        emptyColor: 'red',
      },
    })

    expect(wrapper.find('.var-rate__content').attributes('style')).toContain('color: red')

    await wrapper.setProps({
      emptyColor: 'green',
    })
    expect(wrapper.find('.var-rate__content').attributes('style')).toContain('color: green')

    wrapper.unmount()
  })

  test('rate count', async () => {
    const wrapper = mount(VarRate)

    expect(wrapper.findAll('.var-rate__content').length).toBe(5)

    await wrapper.setProps({
      count: 10,
    })
    expect(wrapper.findAll('.var-rate__content').length).toBe(10)

    wrapper.unmount()
  })

  test('rate gap', async () => {
    const wrapper = mount(VarRate, {
      props: {
        gap: 10,
      },
    })

    expect(wrapper.find('.var-rate__content').attributes('style')).toMatch(/(margin-right: 10px)(.*)/)

    await wrapper.setProps({
      gap: 20,
    })
    expect(wrapper.find('.var-rate__content').attributes('style')).toMatch(/(margin-right: 20px)(.*)/)

    wrapper.unmount()
  })

  test('rate size', async () => {
    const wrapper = mount(VarRate, {
      props: {
        size: 13,
      },
    })

    expect(wrapper.find('.var-rate__content-icon').attributes('style')).toContain('font-size: 13px')

    await wrapper.setProps({
      size: 15,
    })
    expect(wrapper.find('.var-rate__content-icon').attributes('style')).toContain('font-size: 15px')

    wrapper.unmount()
  })

  test('rate half', async () => {
    const onChange = vi.fn()
    const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

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
    expect(wrapper.find('.var-icon-star-half-full').exists()).toBe(true)

    wrapper.unmount()
  })

  test('rate halfIcon', async () => {
    const wrapper = mount(VarRate, {
      props: {
        modelValue: 1.5,
        half: true,
      },
    })

    expect(wrapper.findAll('.var-icon-star-half-full').length).toBe(1)

    await wrapper.setProps({
      halfIcon: 'heart-half-full',
    })
    expect(wrapper.findAll('.var-icon-heart-half-full').length).toBe(1)

    wrapper.unmount()
  })

  test('rate disabled', async () => {
    const onChange = vi.fn()

    const wrapper = mount(VarRate, {
      props: {
        disabled: true,
        onChange,
      },
    })

    expect(wrapper.find('.var-rate--disabled').exists()).toBe(true)
    await wrapper.find('.var-rate__content').trigger('click')
    expect(onChange).toBeCalledTimes(0)

    await wrapper.setProps({ disabled: false })
    expect(wrapper.find('.var-rate--disabled').exists()).toBe(false)
    await wrapper.find('.var-rate__content').trigger('click')
    expect(onChange).toBeCalledTimes(1)

    wrapper.unmount()
  })

  test('rate disabledColor', async () => {
    const wrapper = mount(VarRate, {
      props: {
        disabled: true,
        disabledColor: 'red',
      },
    })

    expect(wrapper.find('.var-rate__content').attributes('style')).toContain('color: red')

    await wrapper.setProps({
      disabledColor: 'green',
    })
    expect(wrapper.find('.var-rate__content').attributes('style')).toContain('color: green')

    wrapper.unmount()
  })

  test('rate readonly', async () => {
    const onChange = vi.fn()

    const wrapper = mount(VarRate, {
      props: {
        readonly: true,
        onChange,
      },
    })

    await wrapper.find('.var-rate__content').trigger('click')
    expect(onChange).toBeCalledTimes(0)

    await wrapper.setProps({ readonly: false })
    await wrapper.find('.var-rate__content').trigger('click')
    expect(onChange).toBeCalledTimes(1)

    wrapper.unmount()
  })

  test('rate rules', async () => {
    const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

    const wrapper = mount(VarRate, {
      props: {
        modelValue: 0,
        rules: [(v) => v >= 1 || 'The lowest score is one'],
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    wrapper.vm.validate()
    await delay(16)
    expect(wrapper.find('.var-form-details__error-message').text()).toBe('The lowest score is one')
    await wrapper.find('.var-rate__content').trigger('click')
    await delay(16)
    expect(wrapper.find('.var-form-details__error-message').exists()).toBeFalsy()
    wrapper.vm.reset()
    await delay(16)
    expect(wrapper.props('modelValue')).toBe(0)

    wrapper.unmount()
  })

  test('rate clearable', async () => {
    const onChange = vi.fn()
    const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

    const wrapper = mount(VarRate, {
      props: {
        modelValue: 1,
        onChange,
        clearable: true,
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    await wrapper.find('.var-rate__content').trigger('click')
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onUpdateModelValue).toHaveBeenCalledTimes(1)
    expect(wrapper.props('modelValue')).toBe(0)

    wrapper.unmount()
  })

  test('rate half clearable', async () => {
    const onChange = vi.fn()
    const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

    const wrapper = mount(VarRate, {
      props: {
        half: true,
        clearable: true,
        modelValue: 0,
        onChange,
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    await trigger(wrapper.find('.var-rate__content'), 'click')
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onUpdateModelValue).toHaveBeenCalledTimes(1)
    expect(wrapper.props('modelValue')).toBe(0.5)

    await trigger(wrapper.find('.var-rate__content'), 'click')
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onUpdateModelValue).toHaveBeenCalledTimes(2)
    expect(wrapper.props('modelValue')).toBe(0)

    wrapper.unmount()
  })
})

describe('test rate component events', () => {
  test('rate component onUpdateModelValue event', async () => {
    const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

    const wrapper = mount(VarRate, {
      props: {
        modelValue: 0,
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    await wrapper.find('.var-rate__content').trigger('click')
    expect(onUpdateModelValue).toHaveBeenCalledTimes(1)
    expect(wrapper.props('modelValue')).toBe(1)

    wrapper.unmount()
  })

  test('rate component onChange event', async () => {
    const onChange = vi.fn()
    const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

    const wrapper = mount(VarRate, {
      props: {
        modelValue: 0,
        onChange,
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    await wrapper.find('.var-rate__content').trigger('click')
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(wrapper.findAll('.var-rate--primary').length).toBe(1)

    await wrapper.find('.var-rate__content').trigger('click')
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(wrapper.findAll('.var-rate--primary').length).toBe(1)

    wrapper.unmount()
  })
})
