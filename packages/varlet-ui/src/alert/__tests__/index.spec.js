import Alert from '..'
import VarAlert from '../Alert'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test, describe } from 'vitest'

test('test alert plugin', () => {
  const app = createApp({}).use(Alert)
  expect(app.component(Alert.name)).toBeTruthy()
})

describe('test alert component props', () => {
  test('test alert title', async () => {
    const wrapper = mount(VarAlert, {
      props: {
        title: 'Pride And Prejudice',
      },
    })

    expect(wrapper.find('.var-alert__title').text()).toBe('Pride And Prejudice')

    await wrapper.setProps({
      title: 'Jane Eyre',
    })

    expect(wrapper.find('.var-alert__title').text()).toBe('Jane Eyre')

    wrapper.unmount()
  })

  test('test alert text', async () => {
    const wrapper = mount(VarAlert, {
      props: {
        text: 'Pride And Prejudice',
      },
    })

    expect(wrapper.find('.var-alert__content').text()).toBe('Pride And Prejudice')

    await wrapper.setProps({
      text: 'Jane Eyre',
    })

    expect(wrapper.find('.var-alert__content').text()).toBe('Jane Eyre')

    wrapper.unmount()
  })

  test('test alert text', async () => {
    const wrapper = mount(VarAlert, {
      props: {
        color: 'red',
      },
    })

    expect(wrapper.find('.var-alert').attributes('style')).toContain('background-color: red')

    await wrapper.setProps({
      color: 'green',
    })

    expect(wrapper.find('.var-alert').attributes('style')).toContain('background-color: green')

    wrapper.unmount()
  })
})
