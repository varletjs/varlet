import RadioGroup from '..'
import Radio from '../../radio'
import VarRadioGroup from '../RadioGroup'
import VarRadio from '../../radio/Radio'
import { mount } from '@vue/test-utils'
import { createApp, h } from 'vue'
import { delay, trigger, triggerKeyboard } from '../../utils/test'
import { expect, vi, test } from 'vitest'

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

  expect(wrapper.find('.var-form-details__error-message').text()).toBe('您必须勾选')
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.var-radio').trigger('click')
  await delay(16)

  expect(wrapper.find('.var-form-details__error-message').exists()).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.vm.reset()
  await delay(16)
  expect(wrapper.props('modelValue')).toBe(false)

  wrapper.unmount()
})

test('test radio default slot', () => {
  const wrapper = mount(VarRadio, {
    slots: {
      default: ({ checked }) => h('span', { class: 'test-default-slot' }, checked),
    },
  })

  expect(wrapper.find('.test-default-slot').text()).toBe('false')

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
  expect(wrapper.find('.var-form-details__error-message').text()).toBe('必须选第一个')
  expect(wrapper.html()).toMatchSnapshot()

  radioGroup.reset()
  await delay(16)
  expect(wrapper.vm.value).toBe(undefined)

  await wrapper.find('.var-radio').trigger('click')
  await delay(16)

  expect(wrapper.find('.var-form-details__error-message').exists()).toBeFalsy()
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

test('test radio group options', async () => {
  const wrapper = mount({
    components: {
      [VarRadioGroup.name]: VarRadioGroup,
      [VarRadio.name]: VarRadio,
    },
    data: () => ({
      value: null,
      options: [
        { label: 'eat', value: 0 },
        { label: 'sleep', value: 1 },
        { label: 'game', value: 2, disabled: true },
      ],
    }),
    template: `
      <var-radio-group v-model="value" :options="options">
      </var-radio-group>
    `,
  })

  expect(wrapper.html()).toMatchSnapshot()

  const children = wrapper.findAll('.var-radio')

  expect(wrapper.vm.value).toStrictEqual(null)

  await trigger(children[0], 'click')
  expect(wrapper.vm.value).toStrictEqual(0)

  await trigger(children[1], 'click')
  expect(wrapper.vm.value).toStrictEqual(1)

  await trigger(children[2], 'click')
  expect(wrapper.vm.value).toStrictEqual(1)

  wrapper.unmount()
})

test('test radio group label-key', async () => {
  const wrapper = mount({
    components: {
      [VarRadioGroup.name]: VarRadioGroup,
      [VarRadio.name]: VarRadio,
    },
    data: () => ({
      value: null,
      options: [
        { name: 'eat', value: 0 },
        { name: 'sleep', value: 1 },
        { name: 'game', value: 2, disabled: true },
      ],
      labelKey: 'name',
    }),
    template: `
      <var-radio-group v-model="value" :options="options" :label-key="labelKey">
      </var-radio-group>
    `,
  })

  expect(wrapper.html()).toMatchSnapshot()

  const children = wrapper.findAll('.var-radio')

  expect(wrapper.vm.value).toStrictEqual(null)

  await trigger(children[0], 'click')
  expect(wrapper.vm.value).toStrictEqual(0)

  await trigger(children[1], 'click')
  expect(wrapper.vm.value).toStrictEqual(1)

  await trigger(children[2], 'click')
  expect(wrapper.vm.value).toStrictEqual(1)

  wrapper.unmount()
})

test('test radio group value-key', async () => {
  const wrapper = mount({
    components: {
      [VarRadioGroup.name]: VarRadioGroup,
      [VarRadio.name]: VarRadio,
    },
    data: () => ({
      value: null,
      options: [
        { label: 'eat', id: 0 },
        { label: 'sleep', id: 1 },
        { label: 'game', id: 2, disabled: true },
      ],
      valueKey: 'id',
    }),
    template: `
      <var-radio-group v-model="value" :options="options" :value-key="valueKey">
      </var-radio-group>
    `,
  })

  expect(wrapper.html()).toMatchSnapshot()

  const children = wrapper.findAll('.var-radio')

  expect(wrapper.vm.value).toStrictEqual(null)

  await trigger(children[0], 'click')
  expect(wrapper.vm.value).toStrictEqual(0)

  await trigger(children[1], 'click')
  expect(wrapper.vm.value).toStrictEqual(1)

  await trigger(children[2], 'click')
  expect(wrapper.vm.value).toStrictEqual(1)

  wrapper.unmount()
})

test('test radio group label is VNode', async () => {
  const wrapper = mount({
    components: {
      [VarRadioGroup.name]: VarRadioGroup,
      [VarRadio.name]: VarRadio,
    },
    data: () => ({
      value: null,
      options: [
        { name: h('h1', 'eat'), id: 0 },
        { name: h('h2', 'sleep'), id: 1 },
        { name: h('h3', 'game'), id: 2, disabled: true },
      ],
      valueKey: 'id',
      labelKey: 'name',
    }),
    template: `
      <var-radio-group v-model="value" :options="options" :label-key="labelKey" :value-key="valueKey">
      </var-radio-group>
    `,
  })

  expect(wrapper.html()).toMatchSnapshot()

  const children = wrapper.findAll('.var-radio')

  expect(wrapper.vm.value).toStrictEqual(null)

  await trigger(children[0], 'click')
  expect(wrapper.vm.value).toStrictEqual(0)

  await trigger(children[1], 'click')
  expect(wrapper.vm.value).toStrictEqual(1)

  await trigger(children[2], 'click')
  expect(wrapper.vm.value).toStrictEqual(1)

  wrapper.unmount()
})

test('test radio group label is function', async () => {
  const formatLabel = (option, checked) => `${option.id}-${checked}`
  const wrapper = mount({
    components: {
      [VarRadioGroup.name]: VarRadioGroup,
      [VarRadio.name]: VarRadio,
    },
    data: () => ({
      value: null,
      options: [
        { name: formatLabel, id: 0 },
        { name: formatLabel, id: 1 },
        { name: formatLabel, id: 2, disabled: true },
      ],
      valueKey: 'id',
      labelKey: 'name',
    }),
    template: `
      <var-radio-group v-model="value" :options="options" :label-key="labelKey" :value-key="valueKey">
      </var-radio-group>
    `,
  })

  expect(wrapper.html()).toMatchSnapshot()

  const children = wrapper.findAll('.var-radio')

  expect(wrapper.vm.value).toStrictEqual(null)

  await trigger(children[0], 'click')
  expect(wrapper.vm.value).toStrictEqual(0)

  await trigger(children[1], 'click')
  expect(wrapper.vm.value).toStrictEqual(1)
  expect(wrapper.html()).toMatchSnapshot()

  await trigger(children[2], 'click')
  expect(wrapper.vm.value).toStrictEqual(1)
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('test radio keyboard Enter', async () => {
  const wrapper = mount({
    components: {
      [VarRadioGroup.name]: VarRadioGroup,
      [VarRadio.name]: VarRadio,
    },
    data: () => ({
      value: 1,
    }),
    template: `
          <var-radio-group v-model="value">
            <var-radio :checked-value="1" >吃饭</var-radio>
            <var-radio :checked-value="2" >睡觉</var-radio>
          </var-radio-group>
        `,
  })

  const children = wrapper.findAllComponents({ name: 'var-radio' })
  await trigger(children[0].find('.var-radio__action'), 'focus')
  await triggerKeyboard(window, 'keydown', { key: 'Enter' })
  expect(wrapper.vm.value).toBe(1)

  await trigger(children[1].find('.var-radio__action'), 'focus')
  await triggerKeyboard(window, 'keyup', { key: ' ' })

  expect(wrapper.vm.value).toBe(2)
  wrapper.unmount()
})

test('test radio group keyboard Arrow', async () => {
  const wrapper = mount({
    components: {
      [VarRadioGroup.name]: VarRadioGroup,
      [VarRadio.name]: VarRadio,
    },
    data: () => ({
      value: 1,
    }),
    template: `
          <var-radio-group v-model="value">
            <var-radio :checked-value="1" >吃饭</var-radio>
            <var-radio :checked-value="2" >睡觉</var-radio>
          </var-radio-group>
        `,
  })

  const children = wrapper.findAllComponents({ name: 'var-radio' })
  await trigger(children[0].find('.var-radio__action'), 'focus')

  await triggerKeyboard(window, 'keydown', { key: 'ArrowRight' })
  await trigger(children[0].find('.var-radio__action'), 'blur')
  await trigger(children[1].find('.var-radio__action'), 'focus')
  expect(wrapper.vm.value).toBe(2)

  await triggerKeyboard(window, 'keydown', { key: 'ArrowRight' })
  await trigger(children[1].find('.var-radio__action'), 'blur')
  await trigger(children[0].find('.var-radio__action'), 'focus')
  expect(wrapper.vm.value).toBe(1)

  await triggerKeyboard(window, 'keydown', { key: 'ArrowLeft' })
  await trigger(children[0].find('.var-radio__action'), 'blur')
  await trigger(children[1].find('.var-radio__action'), 'focus')
  expect(wrapper.vm.value).toBe(2)

  await triggerKeyboard(window, 'keydown', { key: 'ArrowUp' })
  await trigger(children[1].find('.var-radio__action'), 'blur')
  await trigger(children[0].find('.var-radio__action'), 'focus')
  expect(wrapper.vm.value).toBe(1)

  wrapper.unmount()
})
