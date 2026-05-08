import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vite-plus/test'
import { createApp } from 'vue'
import OtpInput from '..'
import VarOtpInput from '../OtpInput.vue'

test('otp-input plugin', () => {
  const app = createApp({}).use(OtpInput)
  expect(app.component(OtpInput.name)).toBeTruthy()
})

describe('test otp-input behaviors', () => {
  test('input digits and emit complete', async () => {
    const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))
    const onInput = vi.fn()
    const onComplete = vi.fn()

    const wrapper = mount(VarOtpInput, {
      props: {
        modelValue: '',
        length: 4,
        onInput,
        onComplete,
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    const inputs = wrapper.findAll('.var-input__input')

    await inputs[0].setValue('1')
    await inputs[1].setValue('2')
    await inputs[2].setValue('3')
    await inputs[3].setValue('4')

    expect(onUpdateModelValue).toHaveBeenLastCalledWith('1234')
    expect(onInput).toHaveBeenCalledTimes(4)
    expect(onInput).toHaveBeenLastCalledWith('1234')
    expect(onComplete).toHaveBeenCalledTimes(1)
    expect(onComplete).toHaveBeenLastCalledWith('1234')

    wrapper.unmount()
  })

  test('paste transform should apply and render separator slot', async () => {
    const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))
    const onPaste = vi.fn()

    const wrapper = mount(VarOtpInput, {
      props: {
        modelValue: '',
        length: 6,
        type: 'alphanumeric',
        pasteTransform: (value) => value.replace(/[-\s]/g, '').toUpperCase(),
        onPaste,
        'onUpdate:modelValue': onUpdateModelValue,
      },
      slots: {
        separator: ({ index }) => (index === 2 ? '-' : null),
      },
    })

    await wrapper.trigger('paste', {
      clipboardData: {
        getData: () => 'ab-12 c3',
      },
    })

    expect(onPaste).toHaveBeenCalledTimes(1)
    expect(onPaste.mock.calls[0][0]).toBe('AB12C3')
    expect(onUpdateModelValue).toHaveBeenLastCalledWith('AB12C3')
    expect(wrapper.find('.var-otp-input__separator').text()).toBe('-')

    wrapper.unmount()
  })

  test('click should emit event and trigger onClick validation', async () => {
    const onClick = vi.fn()
    const rule = vi.fn(() => true)

    const wrapper = mount(VarOtpInput, {
      props: {
        modelValue: '',
        length: 4,
        onClick,
        rules: rule,
        validateTrigger: ['onClick'],
      },
    })

    await wrapper.trigger('click')
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onClick.mock.calls[0][0]).toBeInstanceOf(Event)
    expect(rule).toHaveBeenCalled()
    expect(rule.mock.calls[0][0]).toBe('')

    wrapper.unmount()
  })

  test('click should do nothing when disabled', async () => {
    const onClick = vi.fn()
    const rule = vi.fn(() => true)

    const wrapper = mount(VarOtpInput, {
      props: {
        modelValue: '',
        length: 4,
        disabled: true,
        onClick,
        rules: rule,
        validateTrigger: ['onClick'],
      },
    })

    await wrapper.trigger('click')
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()

    expect(onClick).not.toHaveBeenCalled()
    expect(rule).not.toHaveBeenCalled()

    wrapper.unmount()
  })

  test('paste should replace from the first cell and keep focus on the last cell', async () => {
    const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

    const wrapper = mount(VarOtpInput, {
      props: {
        modelValue: '123456',
        length: 6,
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    const inputs = wrapper.findAll('.var-input__input')

    await inputs[2].trigger('focus')
    await wrapper.trigger('paste', {
      clipboardData: {
        getData: () => '123456',
      },
    })
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()

    expect(onUpdateModelValue).not.toHaveBeenCalled()
    expect(wrapper.vm.activeIndex).toBe(5)

    wrapper.unmount()
  })

  test('should allow overwriting a filled cell', async () => {
    const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

    const wrapper = mount(VarOtpInput, {
      props: {
        modelValue: '1234',
        length: 4,
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    const inputs = wrapper.findAll('.var-input__input')

    await inputs[2].trigger('focus')
    await inputs[2].setValue('9')

    expect(onUpdateModelValue).toHaveBeenLastCalledWith('1294')

    wrapper.unmount()
  })

  test('should move focus to next cell when overwriting a filled value before the end', async () => {
    const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

    const wrapper = mount(VarOtpInput, {
      props: {
        modelValue: '1234',
        length: 4,
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    const inputs = wrapper.findAll('.var-input__input')

    await inputs[0].trigger('focus')
    await inputs[0].setValue('9')
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()

    expect(onUpdateModelValue).toHaveBeenLastCalledWith('9234')
    expect(wrapper.vm.activeIndex).toBe(1)

    wrapper.unmount()
  })

  test('should keep focus on the last filled cell when overwriting it', async () => {
    const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

    const wrapper = mount(VarOtpInput, {
      props: {
        modelValue: '1234',
        length: 4,
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    const inputs = wrapper.findAll('.var-input__input')

    await inputs[3].trigger('focus')
    await inputs[3].setValue('9')
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()

    expect(onUpdateModelValue).toHaveBeenLastCalledWith('1239')
    expect(wrapper.vm.activeIndex).toBe(3)

    wrapper.unmount()
  })

  test('should keep focus when overwriting after the first complete input', async () => {
    const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

    const wrapper = mount(VarOtpInput, {
      props: {
        modelValue: '',
        length: 4,
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    const inputs = wrapper.findAll('.var-input__input')

    await inputs[0].setValue('1')
    await inputs[1].setValue('2')
    await inputs[2].setValue('3')
    await inputs[3].setValue('4')
    await inputs[3].trigger('focus')
    await inputs[3].setValue('9')
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()

    expect(onUpdateModelValue).toHaveBeenLastCalledWith('1239')
    expect(wrapper.vm.activeIndex).toBe(3)

    wrapper.unmount()
  })

  test('should fill from the first empty cell when typing in a later empty cell', async () => {
    const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

    const wrapper = mount(VarOtpInput, {
      props: {
        modelValue: '',
        length: 4,
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    const inputs = wrapper.findAll('.var-input__input')

    await inputs[2].trigger('focus')
    await inputs[2].setValue('9')
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()

    expect(onUpdateModelValue).toHaveBeenLastCalledWith('9')
    expect(wrapper.vm.activeIndex).toBe(1)

    wrapper.unmount()
  })

  test('backspace should remove current cell and shift following chars left', async () => {
    const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

    const wrapper = mount(VarOtpInput, {
      props: {
        modelValue: '1234',
        length: 4,
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    const inputs = wrapper.findAll('.var-input__input')

    await inputs[1].trigger('focus')
    await inputs[1].trigger('keydown', { key: 'Backspace' })

    expect(onUpdateModelValue).toHaveBeenLastCalledWith('134')

    wrapper.unmount()
  })

  test('backspace on empty cell should remove previous filled cell', async () => {
    const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

    const wrapper = mount(VarOtpInput, {
      props: {
        modelValue: '12',
        length: 4,
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    const inputs = wrapper.findAll('.var-input__input')

    await inputs[2].trigger('focus')
    await inputs[2].trigger('keydown', { key: 'Backspace' })

    expect(onUpdateModelValue).toHaveBeenLastCalledWith('1')

    wrapper.unmount()
  })

  test('backspace on non-tail filled cell should move focus backward', async () => {
    const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

    const wrapper = mount(VarOtpInput, {
      props: {
        modelValue: '1234',
        length: 4,
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    const inputs = wrapper.findAll('.var-input__input')

    await inputs[2].trigger('focus')
    await inputs[2].trigger('keydown', { key: 'Backspace' })
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()

    expect(onUpdateModelValue).toHaveBeenLastCalledWith('124')
    expect(wrapper.vm.activeIndex).toBe(1)

    wrapper.unmount()
  })

  test('arrow right should move focus to the next empty cell', async () => {
    const wrapper = mount(VarOtpInput, {
      props: {
        modelValue: '12',
        length: 4,
      },
      attachTo: document.body,
    })

    const inputs = wrapper.findAll('.var-input__input')

    await inputs[1].trigger('focus')
    await inputs[1].trigger('keydown', { key: 'ArrowRight' })
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.activeIndex).toBe(2)

    wrapper.unmount()
  })

  test('reset should clear validation messages even when value is already empty', async () => {
    const wrapper = mount(VarOtpInput, {
      props: {
        modelValue: '',
        rules: [() => 'invalid'],
      },
    })

    await wrapper.vm.validate()
    expect(wrapper.vm.errorMessage).toBe('invalid')

    wrapper.vm.reset()
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.errorMessage).toBe('')

    wrapper.unmount()
  })

  test('reset should not trigger validation again', async () => {
    const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

    const wrapper = mount(VarOtpInput, {
      props: {
        modelValue: '12',
        rules: [() => 'invalid'],
        'onUpdate:modelValue': onUpdateModelValue,
      },
    })

    await wrapper.vm.validate()
    expect(wrapper.vm.errorMessage).toBe('invalid')

    wrapper.vm.reset()
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.errorMessage).toBe('')
    expect(onUpdateModelValue).toHaveBeenLastCalledWith('')

    wrapper.unmount()
  })
})
