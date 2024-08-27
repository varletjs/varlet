import AutoComplete from '..'
import { createApp, nextTick, h } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import { trigger, triggerKeyboard } from '../../utils/test'

test('test auto-complete plugin', () => {
  const app = createApp({}).use(AutoComplete)
  expect(app.component(AutoComplete.name)).toBeTruthy()
})

test('test auto-complete modelValue', async () => {
  const onUpdateModelValue = vi.fn()
  const wrapper = mount(AutoComplete, {
    props: {
      modelValue: '',
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  await wrapper.find('input').setValue('a')
  expect(onUpdateModelValue).toHaveBeenCalledWith('a')
  wrapper.unmount()
})

test('test auto-complete options', async () => {
  const onUpdateModelValue = vi.fn()
  const wrapper = mount(AutoComplete, {
    props: {
      modelValue: 'a',
      'onUpdate:modelValue': onUpdateModelValue,
      options: [
        {
          value: 'Option 1',
          label: 'Option 1',
        },
        {
          value: 'Option 2',
          label: 'Option 2',
        },
      ],
    },
  })

  expect(document.querySelector('.var-menu__menu').style.display).toBe('none')
  await wrapper.trigger('focusin')
  expect(document.querySelector('.var-menu__menu').style.display).toBe('')

  await trigger(document.querySelector('.var-menu-option'), 'click')
  expect(onUpdateModelValue).toHaveBeenCalledWith('Option 1')
  wrapper.unmount()
})

test('test auto-complete getShow', async () => {
  const wrapper = mount(AutoComplete, {
    props: {
      modelValue: 'a',
      options: [
        {
          value: 'Option 1',
          label: 'Option 1',
        },
        {
          value: 'Option 2',
          label: 'Option 2',
        },
      ],
      getShow: (value) => value === 'b',
    },
  })

  expect(document.querySelector('.var-menu__menu').style.display).toBe('none')
  await wrapper.trigger('focusin')
  expect(document.querySelector('.var-menu__menu').style.display).toBe('none')
  await wrapper.find('input').trigger('blur')

  await wrapper.setProps({ modelValue: 'b' })
  expect(document.querySelector('.var-menu__menu').style.display).toBe('none')
  await wrapper.trigger('focusin')
  expect(document.querySelector('.var-menu__menu').style.display).toBe('')

  wrapper.unmount()
})

test('test auto-complete options custom key', async () => {
  const onUpdateModelValue = vi.fn()
  const wrapper = mount(AutoComplete, {
    props: {
      modelValue: 'a',
      labelKey: 'name',
      valueKey: 'id',
      'onUpdate:modelValue': onUpdateModelValue,
      options: [
        {
          id: 'Option Id 1',
          name: 'Option Name 1',
        },
        {
          id: 'Option Id 2',
          name: 'Option Name 2',
        },
      ],
    },
  })

  expect(document.querySelector('.var-menu__menu').style.display).toBe('none')
  await wrapper.trigger('focusin')
  expect(document.querySelector('.var-menu__menu').style.display).toBe('')

  await trigger(document.querySelector('.var-menu-option'), 'click')
  expect(onUpdateModelValue).toHaveBeenCalledWith('Option Id 1')
  wrapper.unmount()
})

test('test auto-complete placeholder', () => {
  const wrapper = mount(AutoComplete, {
    props: {
      placeholder: 'Hello',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test auto-complete maxlength', async () => {
  const onUpdateModelValue = vi.fn()
  const wrapper = mount(AutoComplete, {
    props: {
      maxlength: 1,
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.find('input').setValue('123')
  expect(onUpdateModelValue).toHaveBeenCalledWith('1')

  wrapper.unmount()
})

test('test auto-complete maxlength for handle auto complete', async () => {
  const onUpdateModelValue = vi.fn()
  const wrapper = mount(AutoComplete, {
    props: {
      modelValue: 'a',
      maxlength: 3,
      options: [
        {
          value: 'Option 1',
          label: 'Option 1',
        },
        {
          value: 'Option 2',
          label: 'Option 2',
        },
      ],
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  expect(document.querySelector('.var-menu__menu').style.display).toBe('none')
  await wrapper.trigger('focusin')
  expect(document.querySelector('.var-menu__menu').style.display).toBe('')

  await trigger(document.querySelector('.var-menu-option'), 'click')
  expect(onUpdateModelValue).toHaveBeenCalledWith('Opt')

  wrapper.unmount()
})

test('test auto-complete disabled', async () => {
  const onUpdateModelValue = vi.fn()
  const onClick = vi.fn()
  const wrapper = mount(AutoComplete, {
    props: {
      disabled: true,
      modelValue: 'a',
      options: [
        {
          value: 'Option 1',
          label: 'Option 1',
        },
        {
          value: 'Option 2',
          label: 'Option 2',
        },
      ],
      onClick,
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  expect(document.querySelector('.var-menu__menu').style.display).toBe('none')
  await wrapper.trigger('focusin')
  expect(document.querySelector('.var-menu__menu').style.display).toBe('none')

  await wrapper.trigger('click')
  expect(onClick).not.toHaveBeenCalled()

  wrapper.unmount()
})

test('test auto-complete readonly', async () => {
  const onUpdateModelValue = vi.fn()
  const onClick = vi.fn()
  const wrapper = mount(AutoComplete, {
    props: {
      readonly: true,
      modelValue: 'a',
      options: [
        {
          value: 'Option 1',
          label: 'Option 1',
        },
        {
          value: 'Option 2',
          label: 'Option 2',
        },
      ],
      onClick,
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  expect(document.querySelector('.var-menu__menu').style.display).toBe('none')
  await wrapper.trigger('focusin')
  expect(document.querySelector('.var-menu__menu').style.display).toBe('none')

  await wrapper.trigger('click')
  expect(onClick).toBeCalledTimes(1)

  wrapper.unmount()
})

test('test auto-complete clearable', async () => {
  const onClear = vi.fn()
  const onUpdateModelValue = vi.fn()
  const wrapper = mount(AutoComplete, {
    props: {
      modelValue: 'a',
      clearable: true,
      onClear,
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.find('.var-icon-close-circle').trigger('click')
  expect(onClear).toHaveBeenCalledWith('')
  expect(onUpdateModelValue).toHaveBeenCalledWith('')
  wrapper.unmount()
})

test('test auto complete onInput onChange onFocus onBlur', async () => {
  const onUpdateModelValue = vi.fn()
  const onInput = vi.fn()
  const onChange = vi.fn()
  const onFocus = vi.fn()
  const onBlur = vi.fn()

  const wrapper = mount(AutoComplete, {
    props: {
      modelValue: '',
      'onUpdate:modelValue': onUpdateModelValue,
      onInput,
      onChange,
      onFocus,
      onBlur,
    },
  })

  await wrapper.trigger('focusin')
  expect(onFocus).toHaveBeenCalledTimes(1)
  await wrapper.find('input').trigger('blur')
  expect(onBlur).toHaveBeenCalledTimes(1)

  await wrapper.find('input').setValue('a')
  expect(onInput).toHaveBeenCalledTimes(1)
  expect(onChange).toHaveBeenCalledTimes(1)

  wrapper.unmount()
})

test('test auto-complete hint and line', () => {
  const wrapper = mount(AutoComplete, {
    props: {
      hint: false,
      line: false,
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test auto-complete custom color', () => {
  const wrapper = mount(AutoComplete, {
    props: {
      textColor: 'red',
      focusColor: 'blue',
      blurColor: 'green',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test auto-complete size', () => {
  const wrapper = mount(AutoComplete, {
    props: {
      size: 'small',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test auto-complete variant', () => {
  const wrapper = mount(AutoComplete, {
    props: {
      variant: 'outlined',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test auto-complete slots', () => {
  const wrapper = mount(AutoComplete, {
    slots: {
      'append-icon': () => 'append-icon',
      'prepend-icon': () => 'prepend-icon',
      'clear-icon': () => 'clear-icon',
      'extra-message': () => 'extra-message',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test auto-complete validation', async () => {
  const onUpdateModelValue = vi.fn()
  const wrapper = mount(AutoComplete, {
    props: {
      modelValue: '',
      rules: [(v) => !!v || 'Required'],
      'onUpdate:modelValue': onUpdateModelValue,
    },
  })

  await wrapper.vm.validate()
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.vm.resetValidation()
  await nextTick()
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.vm.reset()
  await nextTick()
  expect(onUpdateModelValue).toHaveBeenCalledTimes(1)
  wrapper.unmount()
})

test('test auto-complete click outside', async () => {
  const wrapper = mount(AutoComplete, {
    props: {
      modelValue: 'a',
      options: [
        {
          value: 'Option 1',
          label: 'Option 1',
        },
        {
          value: 'Option 2',
          label: 'Option 2',
        },
      ],
    },
  })

  expect(document.querySelector('.var-menu__menu').style.display).toBe('none')
  await wrapper.trigger('focusin')
  expect(document.querySelector('.var-menu__menu').style.display).toBe('')

  await trigger(document, 'click')
  expect(document.querySelector('.var-menu__menu').style.display).toBe('none')

  wrapper.unmount()
})

test('test auto-complete select option by keyboard', async () => {
  const onUpdateModelValue = vi.fn()
  const wrapper = mount(AutoComplete, {
    props: {
      modelValue: 'a',
      'onUpdate:modelValue': onUpdateModelValue,
      options: [
        {
          value: 'Option 1',
          label: 'Option 1',
        },
        {
          value: 'Option 2',
          label: 'Option 2',
        },
      ],
    },
  })

  expect(document.querySelector('.var-menu__menu').style.display).toBe('none')
  await wrapper.trigger('focusin')
  expect(document.querySelector('.var-menu__menu').style.display).toBe('')

  await triggerKeyboard(window, 'keydown', { key: 'ArrowDown' })
  await trigger(document.querySelector('.var-menu-option'), 'focus')
  await triggerKeyboard(window, 'keydown', { key: 'Enter' })
  expect(onUpdateModelValue).toHaveBeenCalledWith('Option 1')

  wrapper.unmount()
})

test('test auto-complete close menu by keyboard tab', async () => {
  const wrapper = mount(AutoComplete, {
    props: {
      modelValue: 'a',
      options: [
        {
          value: 'Option 1',
          label: 'Option 1',
        },
        {
          value: 'Option 2',
          label: 'Option 2',
        },
      ],
    },
  })

  expect(document.querySelector('.var-menu__menu').style.display).toBe('none')
  await wrapper.trigger('focusin')
  expect(document.querySelector('.var-menu__menu').style.display).toBe('')

  await triggerKeyboard(window, 'keydown', { key: 'Tab' })
  expect(document.querySelector('.var-menu__menu').style.display).toBe('none')

  wrapper.unmount()
})

test('test auto-complete handle same value by option', async () => {
  const onChange = vi.fn()
  const wrapper = mount(AutoComplete, {
    props: {
      modelValue: 'a',
      options: [
        {
          value: 'a',
          label: 'a',
        },
      ],
      onChange,
    },
  })

  expect(document.querySelector('.var-menu__menu').style.display).toBe('none')
  await wrapper.trigger('focusin')
  expect(document.querySelector('.var-menu__menu').style.display).toBe('')

  await trigger(document.querySelector('.var-menu-option'), 'click')
  expect(onChange).toHaveBeenCalledTimes(0)

  wrapper.unmount()
})

test('test auto-complete focus and blur methods', () => {
  const onFocus = vi.fn()
  const onBlur = vi.fn()
  const wrapper = mount(AutoComplete, {
    props: {
      onFocus,
      onBlur,
    },
  })

  wrapper.vm.focus()
  expect(onFocus).toHaveBeenCalledTimes(1)

  wrapper.vm.blur()
  expect(onBlur).toHaveBeenCalledTimes(1)

  wrapper.unmount()
})

test('test auto-complete clear-icon scoped clear method', async () => {
  const onClear = vi.fn()
  const wrapper = mount(AutoComplete, {
    props: {
      modelValue: 'a',
      clearable: true,
      onClear,
    },
    slots: {
      'clear-icon': ({ clear }) =>
        h('div', [h('div', { class: 'target', onClick: clear }), h('div', { class: 'other' })]),
    },
  })

  await wrapper.find('.other').trigger('click')
  expect(onClear).toHaveBeenCalledTimes(0)

  await wrapper.find('.target').trigger('click')
  expect(onClear).toHaveBeenCalledTimes(1)

  wrapper.unmount()
})
