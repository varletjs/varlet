import example from '../example'
import RadioGroup from '..'
import Radio from '../../radio'
import VarRadioGroup from '../RadioGroup'
import VarRadio from '../../radio/Radio'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay } from '../../utils/test'

test('test radio example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test radio group plugin', () => {
  const app = createApp({}).use(RadioGroup)
  expect(app.component(RadioGroup.name)).toBeTruthy()
})

test('test radio plugin', () => {
  const app = createApp({}).use(Radio)
  expect(app.component(Radio.name)).toBeTruthy()
})

test('test radio check value', async () => {
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarRadio, {
    props: {
      modelValue: false,
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.find('.var-radio').trigger('click')
  expect(onUpdateModelValue).lastCalledWith(true)
  expect(wrapper.props('modelValue')).toBe(true)

  await wrapper.find('.var-radio').trigger('click')
  expect(onUpdateModelValue).lastCalledWith(false)
  expect(wrapper.props('modelValue')).toBe(false)

  wrapper.unmount()
})

test('test radio check value with custom value', async () => {
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarRadio, {
    props: {
      modelValue: 0,
      uncheckedValue: 0,
      checkedValue: 1,
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.find('.var-radio').trigger('click')
  expect(onUpdateModelValue).lastCalledWith(1)
  expect(wrapper.props('modelValue')).toBe(1)

  wrapper.unmount()
})

test('test radio onClick & onChange', async () => {
  const onClick = vi.fn()
  const onChange = vi.fn()

  const wrapper = mount(VarRadio, {
    props: {
      modelValue: false,
      onClick,
      onChange,
    },
  })

  await wrapper.find('.var-radio').trigger('click')
  expect(onClick).toHaveBeenCalledTimes(1)
  expect(onChange).lastCalledWith(true)

  wrapper.unmount()
})

test('test radio toggle method', async () => {
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarRadio, {
    props: {
      modelValue: false,
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  wrapper.vm.toggle()
  await delay(16)

  expect(onUpdateModelValue).lastCalledWith(true)
  expect(wrapper.props('modelValue')).toBe(true)

  wrapper.unmount()
})

test('test radio disabled', async () => {
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))
  const onClick = vi.fn()
  const onChange = vi.fn()

  const wrapper = mount(VarRadio, {
    props: {
      modelValue: false,
      disabled: true,
      onClick,
      onChange,
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.find('.var-radio').trigger('click')

  expect(onUpdateModelValue).toHaveBeenCalledTimes(0)
  expect(onClick).toHaveBeenCalledTimes(0)
  expect(onChange).toHaveBeenCalledTimes(0)
  expect(wrapper.props('modelValue')).toBe(false)

  wrapper.unmount()
})

test('test radio readonly', async () => {
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))
  const onClick = vi.fn()
  const onChange = vi.fn()

  const wrapper = mount(VarRadio, {
    props: {
      modelValue: false,
      readonly: true,
      onClick,
      onChange,
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.find('.var-radio').trigger('click')

  expect(onUpdateModelValue).toHaveBeenCalledTimes(0)
  expect(onClick).toHaveBeenCalledTimes(1)
  expect(onChange).toHaveBeenCalledTimes(0)
  expect(wrapper.props('modelValue')).toBe(false)

  wrapper.unmount()
})

test('test radio with radio group', async () => {
  const wrapper = mount({
    components: {
      [VarRadioGroup.name]: VarRadioGroup,
      [VarRadio.name]: VarRadio,
    },
    data: () => ({
      value: 2,
    }),
    template: `
      <var-radio-group v-model="value">
        <var-radio :checked-value="1" />
        <var-radio :checked-value="2" />
      </var-radio-group>
    `,
  })

  await wrapper.find('.var-radio').trigger('click')
  expect(wrapper.vm.value).toBe(1)

  await wrapper.find('.var-radio').trigger('click')
  expect(wrapper.vm.value).toBe(1)

  wrapper.unmount()
})

test('test radio validation', async () => {
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarRadio, {
    props: {
      modelValue: false,
      rules: [(v) => v || '您必须勾选'],
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  wrapper.vm.validate()
  await delay(16)

  expect(wrapper.find('.var-form-details__message').text()).toBe('您必须勾选')
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.var-radio').trigger('click')
  await delay(16)

  expect(wrapper.find('.var-form-details__message').exists()).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.vm.reset()
  await delay(16)
  expect(wrapper.props('modelValue')).toBe(false)

  wrapper.unmount()
})

test('test radio group validation', async () => {
  const wrapper = mount({
    components: {
      [VarRadioGroup.name]: VarRadioGroup,
      [VarRadio.name]: VarRadio,
    },
    data: () => ({
      value: 2,
    }),
    template: `
      <var-radio-group ref="radioGroup" :rules="[v => v === 1 || '必须选第一个']" v-model="value">
        <var-radio :checked-value="1" />
        <var-radio :checked-value="2" />
      </var-radio-group>
    `,
  })

  const { radioGroup } = wrapper.vm.$refs

  radioGroup.validate()
  await delay(16)
  expect(wrapper.find('.var-form-details__message').text()).toBe('必须选第一个')
  expect(wrapper.html()).toMatchSnapshot()

  radioGroup.reset()
  await delay(16)
  expect(wrapper.vm.value).toBe(undefined)

  await wrapper.find('.var-radio').trigger('click')
  await delay(16)

  expect(wrapper.find('.var-form-details__message').exists()).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('test radio group layout direction', async () => {
  const wrapper = mount({
    components: {
      [VarRadioGroup.name]: VarRadioGroup,
      [VarRadio.name]: VarRadio,
    },
    data: () => ({
      value: 2,
    }),
    template: `
      <var-radio-group direction="vertical" v-model="value">
        <var-radio :checked-value="1" />
        <var-radio :checked-value="2" />
      </var-radio-group>
    `,
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})
