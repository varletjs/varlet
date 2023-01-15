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

test('test input variant', () => {
  ;['standard', 'outlined'].forEach((variant) => {
    const wrapper = mount(VarInput, {
      props: {
        modelValue: 'text',
        variant,
      },
    })

    expect(wrapper.find('.var-input').classes()).toContain(`var-input--${variant}`)
    switch (variant) {
      case 'standard': {
        expect(wrapper.find('.var-input').classes()).toContain('var-input--standard')
        expect(wrapper.find('.var-input__line').wrapperElement.querySelector('.var-input__dot')).toBeTruthy()
        break
      }

      case 'outlined': {
        expect(wrapper.find('.var-input').classes()).toContain('var-input--outlined')
        expect(wrapper.find('.var-input__line').wrapperElement.querySelector('.var-input__line__start')).toBeTruthy()
        break
      }

      default:
        break
    }

    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
  })
})

test('test input size', () => {
  const wrapper = mount(VarInput, {
    props: {
      modelValue: 'text',
      size: 'small',
    },
  })

  expect(wrapper.find('.var-input').classes()).toContain('var-input--small')
  expect(wrapper.html()).toMatchSnapshot()
})

describe('test input events', () => {
  async function expectFocusAndBlur(props = {}) {
    const onFocus = jest.fn()
    const onBlur = jest.fn()

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
        ...props,
      },
    })

    await wrapper.trigger('click')
    expect(onClick).toHaveBeenCalledTimes(1)

    await wrapper.find('.var-input__input').setValue('t')
    expect(onUpdateModelValue).lastCalledWith('t')
    expect(onInput).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledTimes(1)

    wrapper.unmount()
  }

  test('test input focus & blur', async () => {
    await expectFocusAndBlur()
    await expectFocusAndBlur({ textarea: true })
  })

  test('test input onInput & onChange & onClick', async () => {
    await expectInputAndChangeAndClick()
    await expectInputAndChangeAndClick({ textarea: true })
  })
})

test('test input maxlength', () => {
  const wrapper = mount(VarInput, {
    props: {
      modelValue: 'text',
      maxlength: 100,
    },
  })

  expect(wrapper.find('.var-form-details__extra-message').text()).toBe('4/100')
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

test('test input readonly', async () => {
  const onClear = jest.fn()
  const onClick = jest.fn()
  const onInput = jest.fn()
  const onChange = jest.fn()
  const onUpdateModelValue = jest.fn()

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

  await wrapper.find('.var-input__input').setValue('1')
  await wrapper.find('.var-input__input').trigger('input')
  await delay(16)
  expect(wrapper.find('.var-form-details__error-message').text()).toBe('长度必须大于3')
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

test('test input trim', async () => {
  const onUpdateModelValue = jest.fn()

  const wrapper = mount(VarInput, {
    props: {
      modelValue: '123',
      modelModifiers: { trim: true },
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.find('.var-input__input').setValue('123 ')
  await wrapper.find('.var-input__input').trigger('input')

  expect(onUpdateModelValue).lastCalledWith('123')
  wrapper.unmount()
})

test('test input autofocus', async () => {
  const wrapper = mount(VarInput, {
    props: {
      autofocus: true,
    },
  })

  await delay(100)
  expect(wrapper.find('.var-input--focus')).toBeTruthy()

  wrapper.unmount()
})
