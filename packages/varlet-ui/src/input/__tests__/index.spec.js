import { createApp, h } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { z } from 'zod'
import Input from '..'
import { delay } from '../../utils/test'
import VarInput from '../Input'

test('input plugin', () => {
  const app = createApp({}).use(Input)
  expect(app.component(Input.name)).toBeTruthy()
})

test('input variant', () => {
  ;['standard', 'outlined'].forEach((variant) => {
    const wrapper = mount(VarInput, {
      props: {
        modelValue: 'text',
        variant,
      },
    })

    expect(wrapper.find(`var-field-decorator--${variant}`)).toBeTruthy()
    switch (variant) {
      case 'standard': {
        expect(
          wrapper.find('.var-field-decorator__line').wrapperElement.querySelector('.var-field-decorator__dot'),
        ).toBeTruthy()
        break
      }

      case 'outlined': {
        expect(wrapper.find('.var-field-decorator__line').wrapperElement.querySelector('legend')).toBeTruthy()
        break
      }

      default:
        break
    }

    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
  })
})

test('input size', () => {
  const wrapper = mount(VarInput, {
    props: {
      modelValue: 'text',
      size: 'small',
    },
  })

  expect(wrapper.find('.var-field-decorator--small')).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('input type', () => {
  ;['text', 'password', 'number', 'tel', 'email'].forEach((type) => {
    const wrapper = mount(VarInput, {
      props: {
        modelValue: 'text',
        type,
      },
    })

    switch (type) {
      case 'number': {
        expect(wrapper.find('input').attributes('type')).toBe('text')
        expect(wrapper.find('input').attributes('inputmode')).toBe('decimal')
        break
      }

      case 'password': {
        expect(wrapper.find('input').attributes('type')).toBeUndefined()
        expect(wrapper.find('input').attributes('inputmode')).toBeUndefined()
        break
      }

      default: {
        expect(wrapper.find('input').attributes('type')).toBe(type)
        expect(wrapper.find('input').attributes('inputmode')).toBeUndefined()
        break
      }
    }

    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
  })
})

test('input format number', async () => {
  const onUpdateModelValue = vi.fn()
  const wrapper = mount(VarInput, {
    props: {
      modelValue: '',
      type: 'number',
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.find('.var-input__input').setValue('10')
  expect(onUpdateModelValue).lastCalledWith('10')
  await wrapper.find('.var-input__input').setValue('aa111')
  expect(onUpdateModelValue).lastCalledWith('111')
  await wrapper.find('.var-input__input').setValue('1.')
  expect(onUpdateModelValue).lastCalledWith('1.')
  await wrapper.find('.var-input__input').setValue('1.01')
  expect(onUpdateModelValue).lastCalledWith('1.01')

  wrapper.unmount()
})

describe('test input events', () => {
  async function expectFocusAndBlur(props = {}) {
    const onFocus = vi.fn()
    const onBlur = vi.fn()

    const wrapper = mount(VarInput, {
      props: {
        onFocus,
        onBlur,
        ...props,
      },
    })

    wrapper.vm.focus()
    await wrapper.find('.var-input__input').trigger('focus')
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.vm.blur()
    await wrapper.find('.var-input__input').trigger('blur')
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.unmount()
  }

  async function expectInputAndChangeAndClick(props = {}) {
    const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))
    const onInput = vi.fn()
    const onChange = vi.fn()
    const onClick = vi.fn()

    const wrapper = mount(VarInput, {
      props: {
        modelValue: '',
        onInput,
        onChange,
        onClick,
        'onUpdate:modelValue': onUpdateModelValue,
        ...props,
      },
    })

    await wrapper.find('.var-field-decorator').trigger('click')
    expect(onClick).toHaveBeenCalledTimes(1)

    await wrapper.find('.var-input__input').setValue('t')
    expect(onUpdateModelValue).lastCalledWith('t')
    expect(onInput).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledTimes(1)

    wrapper.unmount()
  }

  test('input focus & blur', async () => {
    await expectFocusAndBlur()
    await expectFocusAndBlur({ textarea: true })
  })

  test('input onInput & onChange & onClick', async () => {
    await expectInputAndChangeAndClick()
    await expectInputAndChangeAndClick({ textarea: true })
  })
})

test('input maxlength', () => {
  const wrapper = mount(VarInput, {
    props: {
      modelValue: 'text',
      maxlength: 100,
    },
  })

  expect(wrapper.find('.var-form-details__extra-message').text()).toBe('4/100')
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('input hint to be false', () => {
  const wrapper = mount(VarInput, {
    props: {
      modelValue: 'text',
      hint: false,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('input clear', async () => {
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))
  const onClear = vi.fn()

  const wrapper = mount(VarInput, {
    props: {
      modelValue: 'text',
      clearable: true,
      onClear,
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.var-field-decorator__clear-icon').trigger('click')
  expect(onUpdateModelValue).lastCalledWith('')
  expect(onClear).lastCalledWith('')
  expect(wrapper.props('modelValue')).toBe('')

  wrapper.unmount()
})

const triggerEvents = async (wrapper) => {
  await wrapper.find('.var-input__input').trigger('input')
  await wrapper.find('.var-input__input').trigger('change')
  await wrapper.find('.var-field-decorator__clear-icon').trigger('click')
  await wrapper.find('.var-field-decorator').trigger('click')
}

test('input disabled', async () => {
  const onClear = vi.fn()
  const onClick = vi.fn()
  const onInput = vi.fn()
  const onChange = vi.fn()
  const onUpdateModelValue = vi.fn()

  const wrapper = mount(VarInput, {
    props: {
      modelValue: 'hello',
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

test('input readonly', async () => {
  const onClear = vi.fn()
  const onClick = vi.fn()
  const onInput = vi.fn()
  const onChange = vi.fn()
  const onUpdateModelValue = vi.fn()

  const wrapper = mount(VarInput, {
    props: {
      modelValue: 'hello',
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

  expect(onInput).toHaveBeenCalledTimes(1)
  expect(onClear).toHaveBeenCalledTimes(0)
  expect(onClick).toHaveBeenCalledTimes(2)
  expect(onChange).toHaveBeenCalledTimes(1)
  expect(onUpdateModelValue).toHaveBeenCalledTimes(1)

  wrapper.unmount()
})

test('input validation', async () => {
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarInput, {
    props: {
      modelValue: '',
      rules: [(v) => v.length > 3 || 'The length of value must be more than three'],
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.find('.var-input__input').setValue('1')
  await wrapper.find('.var-input__input').trigger('input')
  await delay(16)
  expect(wrapper.find('.var-form-details__error-message').text()).toBe('The length of value must be more than three')
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.vm.reset()
  await delay(16)
  expect(wrapper.props('modelValue')).toBe('')
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.var-input__input').setValue('1234')
  await wrapper.find('.var-input__input').trigger('input')
  await delay(16)
  expect(wrapper.find('.var-form-details__error-message').exists()).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('input validation with zod', async () => {
  const onUpdateModelValue = vi.fn((value) => wrapper.setProps({ modelValue: value }))

  const wrapper = mount(VarInput, {
    props: {
      modelValue: '',
      rules: z.string().min(4, 'The length of value must be more than three'),
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.find('.var-input__input').setValue('1')
  await wrapper.find('.var-input__input').trigger('input')
  await delay(16)
  expect(wrapper.find('.var-form-details__error-message').text()).toBe('The length of value must be more than three')
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.vm.reset()
  await delay(16)
  expect(wrapper.props('modelValue')).toBe('')
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.var-input__input').setValue('1234')
  await wrapper.find('.var-input__input').trigger('input')
  await delay(16)
  expect(wrapper.find('.var-form-details__error-message').exists()).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('input trim', async () => {
  const onUpdateModelValue = vi.fn()

  const wrapper = mount(VarInput, {
    props: {
      modelValue: '123',
      modelModifiers: { trim: true },
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.find('.var-input__input').setValue('123 ')
  await wrapper.find('.var-input__input').trigger('change')

  expect(onUpdateModelValue).lastCalledWith('123')
  wrapper.unmount()
})

test('input autofocus', async () => {
  const wrapper = mount(VarInput, {
    props: {
      autofocus: true,
    },
  })

  await wrapper.find('.var-input__input').trigger('focus')
  expect(wrapper.find('.var-field-decorator--focus').exists()).toBe(true)

  wrapper.unmount()
})

test('input focus on mousedown', async () => {
  const wrapper = mount(VarInput)

  await wrapper.trigger('mousedown')
  await wrapper.find('.var-input__input').trigger('focus')
  expect(wrapper.find('.var-field-decorator--focus').exists()).toBe(true)
  wrapper.unmount()
})

describe('test input component slots', () => {
  test('input extra slot', async () => {
    const wrapper = mount(VarInput, {
      slots: {
        'extra-message': () => 'There are ten characters that you can input',
      },
    })

    await delay(100)
    expect(wrapper.find('.var-form-details__extra-message').text()).toBe('There are ten characters that you can input')

    wrapper.unmount()
  })

  test('input append-icon slot', () => {
    const wrapper = mount(VarInput, {
      slots: {
        'append-icon': () => 'append-icon',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()

    wrapper.unmount()
  })

  test('input prepend-icon slot', () => {
    const wrapper = mount(VarInput, {
      slots: {
        'prepend-icon': () => 'prepend-icon',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()

    wrapper.unmount()
  })

  test('input clear-icon slot', async () => {
    const wrapper = mount(VarInput, {
      props: {
        clearable: true,
        modelValue: 'value',
      },
      slots: {
        'clear-icon': ({ clear }) => h('button', { class: 'custom-clear-icon', onClick: () => clear() }, 'Clear'),
      },
    })

    await wrapper.find('.custom-clear-icon').trigger('click')
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.unmount()
  })
})

test('input aria-label', async () => {
  const wrapper = mount(VarInput, {
    props: {
      modelValue: 'text',
      ariaLabel: 'test aria-label',
    },
  })

  await delay(100)
  expect(wrapper.find('.var-input__input').attributes('aria-label')).toBe('test aria-label')
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})
