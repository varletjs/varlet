import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import InputOtp from '..'
import VarFormDetails from '../../form-details/FormDetails'
import VarInputOtpItem from '../../input-otp-item/InputOtpItem'
import VarInputOtp from '../InputOtp'

describe('InputOtp', () => {
  test('should register component', () => {
    const app = createApp({}).use(InputOtp)
    expect(app.component(InputOtp.name)).toBeTruthy()
  })

  test('should handle basic usage with v-model', async () => {
    const wrapper = mount(VarInputOtp, {
      props: {
        modelValue: '',
      },
      slots: {
        default: [VarInputOtpItem, VarInputOtpItem, VarInputOtpItem, VarInputOtpItem],
      },
      global: {
        components: {
          VarFormDetails,
        },
      },
    })

    const items = wrapper.findAllComponents(VarInputOtpItem)
    expect(items.length).toBe(4)

    // Test input
    const input = items[0].find('input')
    await input.setValue('1')
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe('1')

    wrapper.unmount()
  })

  test('should handle readonly state', async () => {
    const wrapper = mount(VarInputOtp, {
      props: {
        modelValue: '123',
        readonly: true,
      },
      slots: {
        default: [VarInputOtpItem, VarInputOtpItem, VarInputOtpItem, VarInputOtpItem],
      },
      global: {
        components: {
          VarFormDetails,
        },
      },
    })

    const input = wrapper.find('input')
    expect(input.attributes('readonly')).toBeDefined()

    // In readonly state, the value should not change
    const initialValue = wrapper.props('modelValue')
    await input.setValue('4')
    expect(wrapper.props('modelValue')).toBe(initialValue)

    wrapper.unmount()
  })

  test('should handle disabled state', async () => {
    const wrapper = mount(VarInputOtp, {
      props: {
        modelValue: '123',
        disabled: true,
      },
      slots: {
        default: [VarInputOtpItem, VarInputOtpItem, VarInputOtpItem, VarInputOtpItem],
      },
      global: {
        components: {
          VarFormDetails,
        },
      },
    })

    const input = wrapper.find('input')
    expect(input.attributes('disabled')).toBeDefined()

    // In disabled state, the value should not change
    const initialValue = wrapper.props('modelValue')
    await input.setValue('4')
    expect(wrapper.props('modelValue')).toBe(initialValue)

    wrapper.unmount()
  })

  test('should handle reset and validate methods', async () => {
    const wrapper = mount(VarInputOtp, {
      props: {
        modelValue: '123',
        rules: [(v) => v.length === 4 || 'Must be 4 digits'],
      },
      slots: {
        default: [VarInputOtpItem, VarInputOtpItem, VarInputOtpItem, VarInputOtpItem],
      },
      global: {
        components: {
          VarFormDetails,
        },
      },
    })

    // Test reset method
    await wrapper.vm.reset()
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()

    // Test validate method
    const result = await wrapper.vm.validate()
    expect(result).toBe(false)

    wrapper.unmount()
  })
})
