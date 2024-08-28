import FormDetails from '..'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { describe, expect, test } from 'vitest'

test('test form details plugin', () => {
  const app = createApp({}).use(FormDetails)
  expect(app.component(FormDetails.name)).toBeTruthy()
})

describe('test form details component props', () => {
  test('test form details errorMessage', async () => {
    const wrapper = mount(FormDetails, {
      props: {
        errorMessage: 'Initial errorMessage',
      },
    })

    const errorMessageWrapper = wrapper.find('.var-form-details__error-message')
    const errorMessageDiv = errorMessageWrapper.find('div')

    expect(errorMessageDiv.text()).toBe('Initial errorMessage')

    await wrapper.setProps({
      errorMessage: 'Updated errorMessage',
    })

    expect(errorMessageDiv.text()).toBe('Updated errorMessage')

    wrapper.unmount()
  })

  test('test form details extraMessage', async () => {
    const wrapper = mount(FormDetails, {
      props: {
        extraMessage: 'Initial extraMessage',
      },
    })

    const extraMessageWrapper = wrapper.find('.var-form-details__extra-message')
    const extraMessageDiv = extraMessageWrapper.find('div')

    expect(extraMessageDiv.text()).toBe('Initial extraMessage')

    await wrapper.setProps({
      extraMessage: 'Updated extraMessage',
    })

    expect(extraMessageDiv.text()).toBe('Updated extraMessage')

    wrapper.unmount()
  })
})

describe('test form details component slots', () => {
  test('test chip extraMessage slots', () => {
    const wrapper = mount(FormDetails, {
      slots: {
        'extra-message': () => 'This is extra message slot',
      },
    })

    const extraMessageWrapper = wrapper.find('.var-form-details__extra-message')
    expect(extraMessageWrapper.text()).toBe('This is extra message slot')

    wrapper.unmount()
  })
})
