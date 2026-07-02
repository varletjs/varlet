import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vite-plus/test'
import { createApp, h } from 'vue'
import { z } from 'zod'
import CheckboxGroup from '..'
import Checkbox from '../../checkbox'
import VarCheckbox from '../../checkbox/Checkbox'
import VarForm from '../../form'
import { delay, trigger, triggerKeyboard } from '../../utils/test'
import VarCheckboxGroup from '../CheckboxGroup'
import { CHECKBOX_GROUP_BIND_CHECKBOX_KEY } from '../provide'

test('checkbox group plugin', () => {
  const app = createApp({}).use(CheckboxGroup)
  expect(app.component(CheckboxGroup.name)).toBeTruthy()
})

test('checkbox plugin', () => {
  const app = createApp({}).use(Checkbox)
  expect(app.component(Checkbox.name)).toBeTruthy()
})

test('checkbox check value', async () => {
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

test('checkbox check value with custom value', async () => {
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

test('checkbox onClick & onChange', async () => {
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

test('checkbox emits update before change', async () => {
  const calls = []
  const onUpdateModelValue = vi.fn((value) => {
    calls.push('update')
    wrapper.setProps({ modelValue: value })
  })
  const onChange = vi.fn(() => calls.push('change'))

  const wrapper = mount(VarCheckbox, {
    props: {
      modelValue: false,
      onChange,
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.find('.var-checkbox').trigger('click')

  expect(calls).toStrictEqual(['update', 'change'])

  wrapper.unmount()
})

test('checkbox toggle method', async () => {
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

test('checkbox disabled', async () => {
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

test('checkbox readonly', async () => {
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

test('checkbox indeterminate', async () => {
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

test('checkbox with checkbox group', async () => {
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

test('checkbox group emits update before child change', async () => {
  const wrapper = mount({
    components: {
      [VarCheckboxGroup.name]: VarCheckboxGroup,
      [VarCheckbox.name]: VarCheckbox,
    },
    data: () => ({
      value: [],
      calls: [],
    }),
    methods: {
      handleUpdate(value) {
        this.value = value
        this.calls.push('update')
      },
      handleChange() {
        this.calls.push('change')
      },
    },
    template: `
      <var-checkbox-group :model-value="value" @update:model-value="handleUpdate">
        <var-checkbox :checked-value="1" @change="handleChange" />
      </var-checkbox-group>
    `,
  })

  await wrapper.find('.var-checkbox').trigger('click')

  expect(wrapper.vm.calls).toStrictEqual(['update', 'change'])

  wrapper.unmount()
})

test('checkbox validation', async () => {
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

test('radio default slot', () => {
  const wrapper = mount(VarCheckbox, {
    slots: {
      default: ({ checked }) => h('span', { class: 'test-default-slot' }, checked),
    },
  })

  expect(wrapper.find('.test-default-slot').text()).toBe('false')

  wrapper.unmount()
})

test('checkbox group max', async () => {
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

test('checkbox group default modelValue is empty array', () => {
  const wrapper = mount(VarCheckboxGroup)

  expect(wrapper.props('modelValue')).toStrictEqual([])

  wrapper.unmount()
})

test('checkbox group ignores unchecked value not in modelValue', async () => {
  const wrapper = mount({
    components: {
      [VarCheckboxGroup.name]: VarCheckboxGroup,
      [VarCheckbox.name]: VarCheckbox,
    },
    template: `
      <var-checkbox-group>
        <var-checkbox :checked-value="1" />
      </var-checkbox-group>
    `,
  })

  const checkbox = wrapper.find('.var-checkbox')
  await checkbox.trigger('click')
  await checkbox.trigger('click')

  expect(wrapper.findComponent(VarCheckboxGroup).props('modelValue')).toStrictEqual([])

  wrapper.unmount()
})

test('checkbox group early return when unchecked value not in modelValue', async () => {
  const wrapper = mount({
    components: {
      [VarCheckboxGroup.name]: VarCheckboxGroup,
      [VarCheckbox.name]: VarCheckbox,
    },
    template: `
      <var-checkbox-group>
        <var-checkbox />
      </var-checkbox-group>
    `,
  })

  const checkbox = wrapper.findComponent(VarCheckbox)
  checkbox.vm.toggle(false)
  await wrapper.vm.$nextTick()

  expect(wrapper.findComponent(VarCheckboxGroup).props('modelValue')).toStrictEqual([])

  wrapper.unmount()
})

test('checkbox group ignores checked value already in modelValue', async () => {
  const wrapper = mount({
    components: {
      [VarCheckboxGroup.name]: VarCheckboxGroup,
      [VarCheckbox.name]: VarCheckbox,
    },
    data: () => ({
      value: [1],
    }),
    template: `
      <var-checkbox-group v-model="value">
        <var-checkbox :checked-value="1" />
      </var-checkbox-group>
    `,
  })

  const checkbox = wrapper.findComponent(VarCheckbox)
  checkbox.vm.toggle(1)
  await wrapper.vm.$nextTick()

  expect(wrapper.vm.value).toStrictEqual([1])

  wrapper.unmount()
})

test('checkbox group onChecked branches', () => {
  const onUpdateModelValue = vi.fn()
  const wrapper = mount(VarCheckboxGroup, {
    props: {
      modelValue: [1],
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  const provider = wrapper.vm.$.provides[CHECKBOX_GROUP_BIND_CHECKBOX_KEY]

  provider.onChecked(1)
  expect(onUpdateModelValue).toHaveBeenCalledTimes(0)

  provider.onChecked(2)
  expect(onUpdateModelValue).toHaveBeenCalledWith([1, 2])

  wrapper.unmount()
})

test('checkbox group validation', async () => {
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

test('checkbox group checkAll & inverseAll methods', async () => {
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

test('checkbox group layout direction', () => {
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

test('checkbox group options', async () => {
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

test('checkbox group label-key', async () => {
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

test('checkbox group value-key', async () => {
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

test('checkbox group label is VNode', async () => {
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

test('checkbox group label is function', async () => {
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

test('checkbox keyboard Enter', async () => {
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

test('checkbox focus and blur updates focusing state', async () => {
  const wrapper = mount(VarCheckbox, {
    props: {
      modelValue: false,
    },
  })

  const checkbox = wrapper.find('.var-checkbox')

  await checkbox.trigger('focus')
  expect(wrapper.vm.isFocusing).toBe(true)

  await checkbox.trigger('blur')
  expect(wrapper.vm.isFocusing).toBe(false)

  wrapper.unmount()
})

test('checkbox tabindex defaults and respects disabled/custom values', async () => {
  const wrapper = mount(VarCheckbox, {
    props: {
      modelValue: false,
    },
  })

  expect(wrapper.find('.var-checkbox').attributes('tabindex')).toBe('0')

  await wrapper.setProps({ disabled: true })
  expect(wrapper.find('.var-checkbox').attributes('tabindex')).toBeUndefined()

  await wrapper.setProps({ disabled: false, tabindex: '-1' })
  expect(wrapper.find('.var-checkbox').attributes('tabindex')).toBe('-1')

  wrapper.unmount()
})

test('checkbox text click focuses checkbox', async () => {
  const wrapper = mount(VarCheckbox, {
    props: {
      modelValue: false,
    },
    slots: {
      default: 'Label',
    },
  })

  const focus = vi.spyOn(wrapper.vm.checkbox, 'focus')
  await wrapper.find('.var-checkbox__text').trigger('click')

  expect(focus).toHaveBeenCalledTimes(1)

  wrapper.unmount()
})

test('checkbox renders icons for checked, unchecked, and indeterminate states', async () => {
  const wrapper = mount(VarCheckbox, {
    props: {
      modelValue: false,
    },
  })

  expect(wrapper.find('.var-icon-checkbox-blank-outline').exists()).toBe(true)

  await wrapper.setProps({ modelValue: true })
  expect(wrapper.find('.var-icon-checkbox-marked').exists()).toBe(true)

  await wrapper.setProps({ modelValue: false, indeterminate: true })
  expect(wrapper.find('.var-icon-minus-box').exists()).toBe(true)

  wrapper.unmount()
})

test('checkbox disabled prevents click side effects', async () => {
  const onClick = vi.fn()
  const onChange = vi.fn()
  const onUpdateModelValue = vi.fn()

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

  expect(onClick).toHaveBeenCalledTimes(0)
  expect(onChange).toHaveBeenCalledTimes(0)
  expect(onUpdateModelValue).toHaveBeenCalledTimes(0)

  wrapper.unmount()
})

test('checkbox readonly allows click but prevents change', async () => {
  const onClick = vi.fn()
  const onChange = vi.fn()

  const wrapper = mount(VarCheckbox, {
    props: {
      modelValue: false,
      readonly: true,
      onClick,
      onChange,
      'onUpdate:modelValue': (value) => wrapper.setProps({ modelValue: value }),
    },
  })

  await wrapper.find('.var-checkbox').trigger('click')

  expect(onClick).toHaveBeenCalledTimes(1)
  expect(onChange).toHaveBeenCalledTimes(0)
  expect(wrapper.props('modelValue')).toBe(false)

  wrapper.unmount()
})

test('checkbox indeterminate click clears indeterminate without toggling value', async () => {
  const onChange = vi.fn()

  const wrapper = mount(VarCheckbox, {
    props: {
      modelValue: false,
      indeterminate: true,
      onChange,
      'onUpdate:indeterminate': (value) => wrapper.setProps({ indeterminate: value }),
    },
  })

  await wrapper.find('.var-checkbox').trigger('click')

  expect(onChange).toHaveBeenCalledWith(false, false)
  expect(wrapper.props('indeterminate')).toBe(false)
  expect(wrapper.props('modelValue')).toBe(false)

  wrapper.unmount()
})

test('checkbox respects form disabled state', async () => {
  const wrapper = mount({
    components: {
      [VarForm.name]: VarForm,
      [VarCheckbox.name]: VarCheckbox,
    },
    data: () => ({
      value: false,
    }),
    template: `
      <var-form disabled>
        <var-checkbox v-model="value" />
      </var-form>
    `,
  })

  await wrapper.find('.var-checkbox').trigger('click')
  expect(wrapper.vm.value).toBe(false)

  wrapper.unmount()
})

test('checkbox group max prevents checking new value', async () => {
  const wrapper = mount({
    components: {
      [VarCheckboxGroup.name]: VarCheckboxGroup,
      [VarCheckbox.name]: VarCheckbox,
    },
    data: () => ({
      value: [1],
    }),
    template: `
      <var-checkbox-group :max="1" v-model="value">
        <var-checkbox :checked-value="1" />
        <var-checkbox :checked-value="2" />
      </var-checkbox-group>
    `,
  })

  const checkboxes = wrapper.findAll('.var-checkbox')
  await checkboxes[1].trigger('click')

  expect(wrapper.vm.value).toStrictEqual([1])

  wrapper.unmount()
})

test('checkbox keyboard interactions trigger click when focused', async () => {
  const addEventListener = vi.spyOn(window, 'addEventListener')
  const wrapper = mount(VarCheckbox, {
    props: {
      modelValue: false,
    },
  })

  const click = vi.spyOn(wrapper.vm.checkbox, 'click')

  wrapper.vm.isFocusing = true
  await wrapper.vm.$nextTick()

  const keydownHandler = addEventListener.mock.calls.find(([type]) => type === 'keydown')?.[1]
  const keyupHandler = addEventListener.mock.calls.find(([type]) => type === 'keyup')?.[1]

  keydownHandler?.(new KeyboardEvent('keydown', { key: 'Enter', cancelable: true }))
  keyupHandler?.(new KeyboardEvent('keyup', { key: ' ', cancelable: true }))

  expect(click).toHaveBeenCalledTimes(2)

  wrapper.unmount()
  addEventListener.mockRestore()
})

test('checkbox keyboard handlers prevent default and click as expected', async () => {
  const addEventListener = vi.spyOn(window, 'addEventListener')
  const wrapper = mount(VarCheckbox, {
    props: {
      modelValue: false,
    },
  })

  const click = vi.spyOn(wrapper.vm.checkbox, 'click')

  wrapper.vm.isFocusing = true
  await wrapper.vm.$nextTick()

  const keydownHandler = addEventListener.mock.calls.find(([type]) => type === 'keydown')?.[1]
  const keyupHandler = addEventListener.mock.calls.find(([type]) => type === 'keyup')?.[1]

  const keydownSpace = new KeyboardEvent('keydown', { key: ' ', cancelable: true })
  keydownHandler?.(keydownSpace)
  expect(keydownSpace.defaultPrevented).toBe(true)

  const keydownEnter = new KeyboardEvent('keydown', { key: 'Enter', cancelable: true })
  keydownHandler?.(keydownEnter)
  expect(keydownEnter.defaultPrevented).toBe(true)
  expect(click).toHaveBeenCalledTimes(1)

  const keyupSpace = new KeyboardEvent('keyup', { key: ' ', cancelable: true })
  keyupHandler?.(keyupSpace)
  expect(keyupSpace.defaultPrevented).toBe(true)
  expect(click).toHaveBeenCalledTimes(2)

  wrapper.unmount()
  addEventListener.mockRestore()
})

test('checkbox keyboard events do nothing when not focused', () => {
  const wrapper = mount(VarCheckbox, {
    props: {
      modelValue: false,
    },
  })

  const click = vi.spyOn(wrapper.vm.checkbox, 'click')

  window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', cancelable: true }))
  window.dispatchEvent(new KeyboardEvent('keyup', { key: ' ', cancelable: true }))

  expect(click).toHaveBeenCalledTimes(0)

  wrapper.unmount()
})

test('checkbox keyboard handlers ignore other keys when focused', async () => {
  const addEventListener = vi.spyOn(window, 'addEventListener')
  const wrapper = mount(VarCheckbox, {
    props: {
      modelValue: false,
    },
  })

  const click = vi.spyOn(wrapper.vm.checkbox, 'click')

  wrapper.vm.isFocusing = true
  await wrapper.vm.$nextTick()

  const keydownHandler = addEventListener.mock.calls.find(([type]) => type === 'keydown')?.[1]
  const keyupHandler = addEventListener.mock.calls.find(([type]) => type === 'keyup')?.[1]

  const keydownOther = new KeyboardEvent('keydown', { key: 'a', cancelable: true })
  keydownHandler?.(keydownOther)
  expect(keydownOther.defaultPrevented).toBe(false)

  const keyupOther = new KeyboardEvent('keyup', { key: 'a', cancelable: true })
  keyupHandler?.(keyupOther)
  expect(keyupOther.defaultPrevented).toBe(false)

  expect(click).toHaveBeenCalledTimes(0)

  wrapper.unmount()
  addEventListener.mockRestore()
})

test('checkbox toggle, reset, and validate behave as expected', async () => {
  const wrapper = mount(VarCheckbox, {
    props: {
      modelValue: false,
      rules: [(value) => (value ? true : 'Required')],
      'onUpdate:modelValue': (value) => wrapper.setProps({ modelValue: value }),
    },
  })

  wrapper.vm.toggle('invalid')
  await wrapper.vm.$nextTick()
  expect(wrapper.props('modelValue')).toBe(true)

  wrapper.vm.toggle(false)
  await wrapper.vm.$nextTick()
  expect(wrapper.props('modelValue')).toBe(false)

  await wrapper.setProps({ modelValue: true })
  wrapper.vm.toggle()
  await wrapper.vm.$nextTick()
  expect(wrapper.props('modelValue')).toBe(false)

  const valid = await wrapper.vm.validate()
  expect(valid).toBe(false)
  expect(wrapper.vm.errorMessage).toBe('Required')

  wrapper.vm.reset()
  expect(wrapper.props('modelValue')).toBe(false)
  expect(wrapper.vm.errorMessage).toBe('')

  wrapper.unmount()
})
