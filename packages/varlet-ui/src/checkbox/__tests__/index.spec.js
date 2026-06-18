import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vite-plus/test'
import { createApp } from 'vue'
import Checkbox from '..'
import VarCheckboxGroup from '../../checkbox-group'
import VarForm from '../../form'
import VarCheckbox from '../Checkbox'

test('checkbox plugin', () => {
  const app = createApp({}).use(Checkbox)
  expect(app.component(Checkbox.name)).toBeTruthy()
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
