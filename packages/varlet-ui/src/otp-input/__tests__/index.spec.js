import OtpInput from '..'
import VarOtpInput from '../OtpInput'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
// import { trigger, triggerKeyboard } from '../../utils/test'
import { expect, vi, describe, test } from 'vitest'

test('test otp-input plugin', () => {
  const app = createApp({}).use(OtpInput)
  expect(app.component(OtpInput.name)).toBeTruthy()
})

describe('test otp-input', () => {
  test('enters value and moves to next input', async () => {
    const onUpdateModelValue = vi.fn()
    const onFocus = vi.fn()

    const wrapper = mount(VarOtpInput, {
      props: {
        modelValue: '',
        'onUpdate:modelValue': onUpdateModelValue,
        onFocus,
      },
    })

    const children = wrapper.findAllComponents({ name: 'var-input' })

    let val = ''
    for (let i = 0; i < children.length; ++i) {
      const input = children[i].find('.var-input__input')
      if (i === 0) {
        await input.trigger('click')
      }
      await input.setValue(String(i))
      expect(onUpdateModelValue).lastCalledWith((val += String(i)))
      if (i !== 0 && i < children.length - 1) {
        expect(onFocus).lastCalledWith(i + 1)
      }
    }

    wrapper.unmount()
  })

  test('enters value and moves to next input when focused index is not next', async () => {
    const onUpdateModelValue = vi.fn()
    const onFocus = vi.fn()

    const wrapper = mount(VarOtpInput, {
      props: {
        modelValue: '',
        'onUpdate:modelValue': onUpdateModelValue,
        onFocus,
      },
    })

    const children = wrapper.findAllComponents({ name: 'var-input' })
    const input = children[3].find('.var-input__input')
    await input.trigger('click')
    await input.setValue(String(0))

    expect(onUpdateModelValue).lastCalledWith('0')
    expect(onFocus).lastCalledWith(1)

    wrapper.unmount()
  })

  // test('removes value and goes back when using backspace', async () => {
  //   const onUpdateModelValue = vi.fn()
  //   const onFocus = vi.fn()
  //   const onChange = vi.fn()
  //   const onKeydown = vi.fn()

  //   const wrapper = mount(VarOtpInput, {
  //     props: {
  //       modelValue: '123',
  //       'onUpdate:modelValue': onUpdateModelValue,
  //       onFocus: onFocus,
  //       onChange: onChange,
  //       onKeydown: onKeydown
  //     }
  //   })

  //   const children = wrapper.findAllComponents({ name: 'var-input' })
  //   const input = children[2].find('.var-input__input')
  //   trigger(input, 'click')

  //   await triggerKeyboard(wrapper, 'keydown', { key: 'Backspace' })
  //   await triggerKeyboard(wrapper, 'keydown', { key: 'Backspace' })
  //   await triggerKeyboard(wrapper, 'keydown', { key: 'Backspace' })
  //   await triggerKeyboard(wrapper, 'keydown', { key: 'Backspace' })
  //   await triggerKeyboard(wrapper, 'keydown', { key: 'Backspace' })

  //   expect(onKeydown).toHaveBeenCalledTimes(5)
  //   expect(onUpdateModelValue).lastCalledWith('')

  //   wrapper.unmount()
  // })
})
