import { createApp, h } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { z } from 'zod'
import CheckboxGroup from '..'
import Checkbox from '../../checkbox'
import VarCheckbox from '../../checkbox/Checkbox'
import { delay, trigger, triggerKeyboard } from '../../utils/test'
import VarCheckboxGroup from '../CheckboxGroup'

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
  expect(onChange).lastCalledWith(true, false)

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

test('test checkbox indeterminate', async () => {
  const onChange = vi.fn()
  const wrapper = mount(VarCheckbox, {
    props: {
      modelValue: false,
      indeterminate: true,
      onChange,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.var-checkbox').trigger('click')
  expect(onChange).lastCalledWith(false, false)
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
      rules: [(v) => v || 'You must choose one option'],
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  wrapper.vm.validate()
  await delay(16)

  expect(wrapper.find('.var-form-details__error-message').text()).toBe('You must choose one option')
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.var-checkbox').trigger('click')
  await delay(16)

  expect(wrapper.find('.var-form-details__error-message').exists()).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.vm.reset()
  await delay(16)
  expect(wrapper.props('modelValue')).toBe(false)

  wrapper.unmount()
})

test('test radio default slot', () => {
  const wrapper = mount(VarCheckbox, {
    slots: {
      default: ({ checked }) => h('span', { class: 'test-default-slot' }, checked),
    },
  })

  expect(wrapper.find('.test-default-slot').text()).toBe('false')

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
      <var-checkbox-group ref="checkboxGroup" :rules="[v => v.length >= 1 || 'You must choose one option at least']" v-model="value">
        <var-checkbox :checked-value="1" />
        <var-checkbox :checked-value="2" />
      </var-checkbox-group>
    `,
  })

  const { checkboxGroup } = wrapper.vm.$refs

  checkboxGroup.validate()
  await delay(16)
  expect(wrapper.find('.var-form-details__error-message').text()).toBe('You must choose one option at least')
  expect(wrapper.html()).toMatchSnapshot()

  checkboxGroup.reset()
  await delay(16)
  expect(wrapper.vm.value).toStrictEqual([])

  await wrapper.find('.var-checkbox').trigger('click')
  await delay(16)

  expect(wrapper.find('.var-form-details__error-message').exists()).toBeFalsy()
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

test('test checkbox group layout direction', () => {
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

test('test checkbox group options', async () => {
  const wrapper = mount({
    components: {
      [VarCheckboxGroup.name]: VarCheckboxGroup,
      [VarCheckbox.name]: VarCheckbox,
    },
    data: () => ({
      value: [],
      options: [
        { label: 'eat', value: 0, disabled: true },
        { label: 'sleep', value: 1 },
        { label: 'game', value: 2 },
      ],
    }),
    template: `
      <var-checkbox-group v-model="value" :options="options">
      </var-checkbox-group>
    `,
  })

  expect(wrapper.html()).toMatchSnapshot()

  const children = wrapper.findAll('.var-checkbox')
  await trigger(children[0], 'click')
  expect(wrapper.vm.value).toStrictEqual([])

  await trigger(children[1], 'click')
  expect(wrapper.vm.value).toStrictEqual([1])

  await trigger(children[2], 'click')
  expect(wrapper.vm.value).toStrictEqual([1, 2])

  await trigger(children[2], 'click')
  expect(wrapper.vm.value).toStrictEqual([1])

  wrapper.unmount()
})

test('test checkbox group label-key', async () => {
  const wrapper = mount({
    components: {
      [VarCheckboxGroup.name]: VarCheckboxGroup,
      [VarCheckbox.name]: VarCheckbox,
    },
    data: () => ({
      value: [],
      options: [
        { name: 'eat', value: 0, disabled: true },
        { name: 'sleep', value: 1 },
        { name: 'game', value: 2 },
      ],
      labelKey: 'name',
    }),
    template: `
      <var-checkbox-group v-model="value" :options="options" :label-key="labelKey">
      </var-checkbox-group>
    `,
  })

  expect(wrapper.html()).toMatchSnapshot()

  const children = wrapper.findAll('.var-checkbox')
  await trigger(children[0], 'click')
  expect(wrapper.vm.value).toStrictEqual([])

  await trigger(children[1], 'click')
  expect(wrapper.vm.value).toStrictEqual([1])

  await trigger(children[2], 'click')
  expect(wrapper.vm.value).toStrictEqual([1, 2])

  await trigger(children[2], 'click')
  expect(wrapper.vm.value).toStrictEqual([1])

  wrapper.unmount()
})

test('test checkbox group value-key', async () => {
  const wrapper = mount({
    components: {
      [VarCheckboxGroup.name]: VarCheckboxGroup,
      [VarCheckbox.name]: VarCheckbox,
    },
    data: () => ({
      value: [],
      options: [
        { label: 'eat', id: 0, disabled: true },
        { label: 'sleep', id: 1 },
        { label: 'game', id: 2 },
      ],
      valueKey: 'id',
    }),
    template: `
      <var-checkbox-group v-model="value" :options="options" :value-key="valueKey">
      </var-checkbox-group>
    `,
  })

  expect(wrapper.html()).toMatchSnapshot()

  const children = wrapper.findAll('.var-checkbox')
  await trigger(children[0], 'click')
  expect(wrapper.vm.value).toStrictEqual([])

  await trigger(children[1], 'click')
  expect(wrapper.vm.value).toStrictEqual([1])

  await trigger(children[2], 'click')
  expect(wrapper.vm.value).toStrictEqual([1, 2])

  await trigger(children[2], 'click')
  expect(wrapper.vm.value).toStrictEqual([1])

  wrapper.unmount()
})

test('test checkbox group label is VNode', async () => {
  const wrapper = mount({
    components: {
      [VarCheckboxGroup.name]: VarCheckboxGroup,
      [VarCheckbox.name]: VarCheckbox,
    },
    data: () => ({
      value: [],
      options: [
        { name: h('h1', 'eat'), id: 0, disabled: true },
        { name: h('h2', 'sleep'), id: 1 },
        { name: h('h3', 'game'), id: 2 },
      ],
      valueKey: 'id',
      labelKey: 'name',
    }),
    template: `
      <var-checkbox-group v-model="value" :options="options" :label-key="labelKey" :value-key="valueKey">
      </var-checkbox-group>
    `,
  })

  expect(wrapper.html()).toMatchSnapshot()

  const children = wrapper.findAll('.var-checkbox')
  await trigger(children[0], 'click')
  expect(wrapper.vm.value).toStrictEqual([])

  await trigger(children[1], 'click')
  expect(wrapper.vm.value).toStrictEqual([1])

  await trigger(children[2], 'click')
  expect(wrapper.vm.value).toStrictEqual([1, 2])

  await trigger(children[2], 'click')
  expect(wrapper.vm.value).toStrictEqual([1])

  wrapper.unmount()
})

test('test checkbox group label is function', async () => {
  const formatLabel = (option, checked) => `${option.id}-${checked}`
  const wrapper = mount({
    components: {
      [VarCheckboxGroup.name]: VarCheckboxGroup,
      [VarCheckbox.name]: VarCheckbox,
    },
    data: () => ({
      value: [],
      options: [
        { name: formatLabel, id: 0, disabled: true },
        { name: formatLabel, id: 1 },
        { name: formatLabel, id: 2 },
      ],
      valueKey: 'id',
      labelKey: 'name',
    }),
    template: `
      <var-checkbox-group v-model="value" :options="options" :label-key="labelKey" :value-key="valueKey">
      </var-checkbox-group>
    `,
  })

  expect(wrapper.html()).toMatchSnapshot()

  const children = wrapper.findAll('.var-checkbox')
  await trigger(children[0], 'click')
  expect(wrapper.vm.value).toStrictEqual([])

  await trigger(children[1], 'click')
  expect(wrapper.vm.value).toStrictEqual([1])
  expect(wrapper.html()).toMatchSnapshot()

  await trigger(children[2], 'click')
  expect(wrapper.vm.value).toStrictEqual([1, 2])
  expect(wrapper.html()).toMatchSnapshot()

  await trigger(children[2], 'click')
  expect(wrapper.vm.value).toStrictEqual([1])
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('test checkbox keyboard Enter', async () => {
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
            <var-checkbox :checked-value="1" >eat</var-checkbox>
            <var-checkbox :checked-value="2" >sleep</var-checkbox>
          </var-checkbox-group>
        `,
  })

  const children = wrapper.findAllComponents({ name: 'var-checkbox' })
  await trigger(children[0].find('.var-checkbox__action'), 'focus')
  await triggerKeyboard(window, 'keydown', { key: 'Enter' })
  expect(wrapper.vm.value).toStrictEqual([1])

  await trigger(children[1].find('.var-checkbox__action'), 'focus')
  await triggerKeyboard(window, 'keyup', { key: ' ' })

  expect(wrapper.vm.value).toStrictEqual([1, 2])

  await triggerKeyboard(window, 'keydown', { key: 'Enter' })
  expect(wrapper.vm.value).toStrictEqual([1])

  wrapper.unmount()
})

describe('validation with zod', () => {
  test('checkbox', async () => {
    const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

    const wrapper = mount(VarCheckbox, {
      props: {
        modelValue: false,
        rules: z.boolean().refine((v) => v, { message: 'You must choose one option' }),
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    wrapper.vm.validate()
    await delay(16)

    expect(wrapper.find('.var-form-details__error-message').text()).toBe('You must choose one option')
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.find('.var-checkbox').trigger('click')
    await delay(16)

    expect(wrapper.find('.var-form-details__error-message').exists()).toBeFalsy()
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.vm.reset()
    await delay(16)
    expect(wrapper.props('modelValue')).toBe(false)

    wrapper.unmount()
  })

  test('checkbox group', async () => {
    const wrapper = mount({
      components: {
        [VarCheckboxGroup.name]: VarCheckboxGroup,
        [VarCheckbox.name]: VarCheckbox,
      },
      data: () => ({
        value: [],
        rules: z.array(z.number()).refine((v) => v.length >= 1, { message: 'You must choose one option at least' }),
      }),
      template: `
        <var-checkbox-group ref="checkboxGroup" :rules="rules" v-model="value">
          <var-checkbox :checked-value="1" />
          <var-checkbox :checked-value="2" />
        </var-checkbox-group>
      `,
    })

    const { checkboxGroup } = wrapper.vm.$refs

    checkboxGroup.validate()
    await delay(16)
    expect(wrapper.find('.var-form-details__error-message').text()).toBe('You must choose one option at least')
    expect(wrapper.html()).toMatchSnapshot()

    checkboxGroup.reset()
    await delay(16)
    expect(wrapper.vm.value).toStrictEqual([])

    await wrapper.find('.var-checkbox').trigger('click')
    await delay(16)

    expect(wrapper.find('.var-form-details__error-message').exists()).toBeFalsy()
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.unmount()
  })
})
