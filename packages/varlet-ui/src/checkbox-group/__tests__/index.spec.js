import CheckboxGroup from '..'
import Checkbox from '../../checkbox'
import VarCheckboxGroup from '../CheckboxGroup'
import VarCheckbox from '../../checkbox/Checkbox'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay } from '../../utils/test'

test('test checkbox group plugin', () => {
  const app = createApp({}).use(CheckboxGroup)
  expect(app.component(CheckboxGroup.name)).toBeTruthy()
})

test('test checkbox plugin', () => {
  const app = createApp({}).use(Checkbox)
  expect(app.component(Checkbox.name)).toBeTruthy()
})

test('test checkbox check value', async () => {
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarCheckbox, {
    props: {
      modelValue: false,
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.find('.var-checkbox').trigger('click')
  expect(onUpdateModelValue).lastCalledWith(true)
  expect(wrapper.props('modelValue')).toBe(true)

  await wrapper.find('.var-checkbox').trigger('click')
  expect(onUpdateModelValue).lastCalledWith(false)
  expect(wrapper.props('modelValue')).toBe(false)

  wrapper.unmount()
})

test('test checkbox check value with custom value', async () => {
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarCheckbox, {
    props: {
      modelValue: 0,
      uncheckedValue: 0,
      checkedValue: 1,
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.find('.var-checkbox').trigger('click')
  expect(onUpdateModelValue).lastCalledWith(1)
  expect(wrapper.props('modelValue')).toBe(1)

  wrapper.unmount()
})

test('test checkbox onClick & onChange', async () => {
  const onClick = vi.fn()
  const onChange = vi.fn()

  const wrapper = mount(VarCheckbox, {
    props: {
      modelValue: false,
      onClick,
      onChange,
    },
  })

  await wrapper.find('.var-checkbox').trigger('click')
  expect(onClick).toHaveBeenCalledTimes(1)
  expect(onChange).lastCalledWith(true)

  wrapper.unmount()
})

test('test checkbox toggle method', async () => {
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarCheckbox, {
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

test('test checkbox disabled', async () => {
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))
  const onClick = vi.fn()
  const onChange = vi.fn()

  const wrapper = mount(VarCheckbox, {
    props: {
      modelValue: false,
      disabled: true,
      onClick,
      onChange,
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.find('.var-checkbox').trigger('click')

  expect(onUpdateModelValue).toHaveBeenCalledTimes(0)
  expect(onClick).toHaveBeenCalledTimes(0)
  expect(onChange).toHaveBeenCalledTimes(0)
  expect(wrapper.props('modelValue')).toBe(false)

  wrapper.unmount()
})

test('test checkbox readonly', async () => {
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))
  const onClick = vi.fn()
  const onChange = vi.fn()

  const wrapper = mount(VarCheckbox, {
    props: {
      modelValue: false,
      readonly: true,
      onClick,
      onChange,
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.find('.var-checkbox').trigger('click')

  expect(onUpdateModelValue).toHaveBeenCalledTimes(0)
  expect(onClick).toHaveBeenCalledTimes(1)
  expect(onChange).toHaveBeenCalledTimes(0)
  expect(wrapper.props('modelValue')).toBe(false)

  wrapper.unmount()
})

test('test checkbox with checkbox group', async () => {
  const wrapper = mount({
    components: {
      [VarCheckboxGroup.name]: VarCheckboxGroup,
      [VarCheckbox.name]: VarCheckbox,
    },
    data: () => ({
      value: [],
    }),
    template: `
      <var-checkbox-group v-model="value">
        <var-checkbox :checked-value="1" />
        <var-checkbox :checked-value="2" />
      </var-checkbox-group>
    `,
  })

  await wrapper.find('.var-checkbox').trigger('click')
  expect(wrapper.vm.value).toStrictEqual([1])
  await wrapper.find('.var-checkbox').trigger('click')
  expect(wrapper.vm.value).toStrictEqual([])

  wrapper.unmount()
})

test('test checkbox validation', async () => {
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarCheckbox, {
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

  await wrapper.find('.var-checkbox').trigger('click')
  await delay(16)

  expect(wrapper.find('.var-form-details__message').exists()).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.vm.reset()
  await delay(16)
  expect(wrapper.props('modelValue')).toBe(false)

  wrapper.unmount()
})

test('test checkbox group max', async () => {
  const wrapper = mount({
    components: {
      [VarCheckboxGroup.name]: VarCheckboxGroup,
      [VarCheckbox.name]: VarCheckbox,
    },
    data: () => ({
      value: [],
    }),
    template: `
      <var-checkbox-group :max="1" v-model="value">
        <var-checkbox :checked-value="1" />
        <var-checkbox :checked-value="2" />
      </var-checkbox-group>
    `,
  })

  const checkboxes = wrapper.findAll('.var-checkbox')

  await checkboxes[0].trigger('click')
  expect(wrapper.vm.value).toStrictEqual([1])

  await checkboxes[1].trigger('click')
  expect(wrapper.vm.value).toStrictEqual([1])

  wrapper.unmount()
})

test('test checkbox group validation', async () => {
  const wrapper = mount({
    components: {
      [VarCheckboxGroup.name]: VarCheckboxGroup,
      [VarCheckbox.name]: VarCheckbox,
    },
    data: () => ({
      value: [],
    }),
    template: `
      <var-checkbox-group ref="checkboxGroup" :rules="[v => v.length >= 1 || '至少选一个']" v-model="value">
        <var-checkbox :checked-value="1" />
        <var-checkbox :checked-value="2" />
      </var-checkbox-group>
    `,
  })

  const { checkboxGroup } = wrapper.vm.$refs

  checkboxGroup.validate()
  await delay(16)
  expect(wrapper.find('.var-form-details__message').text()).toBe('至少选一个')
  expect(wrapper.html()).toMatchSnapshot()

  checkboxGroup.reset()
  await delay(16)
  expect(wrapper.vm.value).toStrictEqual([])

  await wrapper.find('.var-checkbox').trigger('click')
  await delay(16)

  expect(wrapper.find('.var-form-details__message').exists()).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('test checkbox group checkAll & inverseAll methods', async () => {
  const wrapper = mount({
    components: {
      [VarCheckboxGroup.name]: VarCheckboxGroup,
      [VarCheckbox.name]: VarCheckbox,
    },
    data: () => ({
      value: [1],
    }),
    template: `
      <var-checkbox-group ref="checkboxGroup" v-model="value">
        <var-checkbox :checked-value="1" />
        <var-checkbox :checked-value="2" />
      </var-checkbox-group>
    `,
  })

  await delay(16)
  const { checkboxGroup } = wrapper.vm.$refs

  checkboxGroup.inverseAll()
  await delay(16)
  expect(wrapper.vm.value).toStrictEqual([2])

  checkboxGroup.checkAll()
  await delay(16)
  expect(wrapper.vm.value).toStrictEqual([1, 2])

  wrapper.unmount()
})

test('test checkbox group layout direction', async () => {
  const wrapper = mount({
    components: {
      [VarCheckboxGroup.name]: VarCheckboxGroup,
      [VarCheckbox.name]: VarCheckbox,
    },
    data: () => ({
      value: [],
    }),
    template: `
      <var-checkbox-group direction="vertical" v-model="value">
        <var-checkbox :checked-value="1" />
        <var-checkbox :checked-value="2" />
      </var-checkbox-group>
    `,
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})
