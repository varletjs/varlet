import example from '../example'
import Input from '..'
import VarInput from '../Input'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay } from '../../utils/jest'

test('test input example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test input plugin', () => {
  const app = createApp({}).use(Input)
  expect(app.component(Input.name)).toBeTruthy()
})

test('test input focus & blur', async () => {
  const onFocus = jest.fn()
  const onBlur = jest.fn()

  const wrapper = mount(VarInput, {
    props: {
      onFocus,
      onBlur,
    },
  })

  wrapper.vm.focus()
  await wrapper.find('.var-input__input').trigger('focus')
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.vm.blur()
  await wrapper.find('.var-input__input').trigger('blur')
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('test input onInput & onChange & onClick', async () => {
  const onUpdateModelValue = jest.fn((value) => wrapper.setProps({ modelValue: value }))
  const onInput = jest.fn()
  const onChange = jest.fn()
  const onClick = jest.fn()

  const wrapper = mount(VarInput, {
    props: {
      modelValue: '',
      onInput,
      onChange,
      onClick,
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.trigger('click')
  expect(onClick).toHaveBeenCalledTimes(1)

  wrapper.find('.var-input__input').setValue('t')

  await wrapper.find('.var-input__input').trigger('input')
  expect(onUpdateModelValue).lastCalledWith('t')
  expect(onInput).lastCalledWith('t', new Event('input'))
  expect(wrapper.props('modelValue')).toBe('t')

  await wrapper.find('.var-input__input').trigger('change')
  expect(onChange).lastCalledWith('t', new Event('input'))

  wrapper.unmount()
})

test('test input maxlength', () => {
  const wrapper = mount(VarInput, {
    props: {
      modelValue: 'text',
      maxlength: 100,
    },
  })

  expect(wrapper.find('.var-form-details__length').text()).toBe('4/100')
  expect(wrapper.html()).toMatchSnapshot()
})

test('test input hint to be false', () => {
  const wrapper = mount(VarInput, {
    props: {
      modelValue: 'text',
      hint: false,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('test input clear', async () => {
  const onUpdateModelValue = jest.fn((value) => wrapper.setProps({ modelValue: value }))
  const onClear = jest.fn()

  const wrapper = mount(VarInput, {
    props: {
      modelValue: 'text',
      clearable: true,
      onClear,
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.var-input__clear-icon').trigger('click')
  expect(onUpdateModelValue).lastCalledWith('')
  expect(onClear).lastCalledWith('')
  expect(wrapper.props('modelValue')).toBe('')

  wrapper.unmount()
})

const triggerEvents = async (wrapper) => {
  await wrapper.find('.var-input__input').trigger('input')
  await wrapper.find('.var-input__input').trigger('change')
  await wrapper.find('.var-input__clear-icon').trigger('click')
  await wrapper.trigger('click')
}

test('test input disabled', async () => {
  const onClear = jest.fn()
  const onClick = jest.fn()
  const onInput = jest.fn()
  const onChange = jest.fn()
  const onUpdateModelValue = jest.fn()

  const wrapper = mount(VarInput, {
    props: {
      modelValue: '',
      clearable: true,
      disabled: true,
      onInput,
      onClear,
      onClick,
      onChange,
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await triggerEvents(wrapper)

  expect(onInput).toHaveBeenCalledTimes(0)
  expect(onClear).toHaveBeenCalledTimes(0)
  expect(onClick).toHaveBeenCalledTimes(0)
  expect(onChange).toHaveBeenCalledTimes(0)
  expect(onUpdateModelValue).toHaveBeenCalledTimes(0)

  wrapper.unmount()
})

test('test input readonly', async () => {
  const onClear = jest.fn()
  const onClick = jest.fn()
  const onInput = jest.fn()
  const onChange = jest.fn()
  const onUpdateModelValue = jest.fn()

  const wrapper = mount(VarInput, {
    props: {
      modelValue: '',
      clearable: true,
      readonly: true,
      onInput,
      onClear,
      onClick,
      onChange,
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await triggerEvents(wrapper)

  expect(onInput).toHaveBeenCalledTimes(0)
  expect(onClear).toHaveBeenCalledTimes(0)
  expect(onClick).toHaveBeenCalledTimes(2)
  expect(onChange).toHaveBeenCalledTimes(0)
  expect(onUpdateModelValue).toHaveBeenCalledTimes(0)

  wrapper.unmount()
})

test('test input validation', async () => {
  const onUpdateModelValue = jest.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarInput, {
    props: {
      modelValue: '',
      rules: [(v) => v.length > 3 || '长度必须大于3'],
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  wrapper.find('.var-input__input').setValue('1')
  await wrapper.find('.var-input__input').trigger('input')
  await delay(16)
  expect(wrapper.find('.var-form-details__message').text()).toBe('长度必须大于3')
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.vm.reset()
  await delay(16)
  expect(wrapper.props('modelValue')).toBe('')
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.find('.var-input__input').setValue('1234')
  await wrapper.find('.var-input__input').trigger('input')
  await delay(16)
  expect(wrapper.find('.var-form-details__message').exists()).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('test input number value', async () => {
  const onUpdateModelValue = jest.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarInput, {
    props: {
      modelValue: 0,
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  wrapper.find('.var-input__input').setValue('1')
  await wrapper.find('.var-input__input').trigger('input')

  expect(onUpdateModelValue).lastCalledWith(1)
  expect(wrapper.props('modelValue')).toBe(1)

  wrapper.unmount()
})
