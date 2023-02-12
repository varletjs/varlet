import ButtonGroup from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test button-group plugin', () => {
  const app = createApp({}).use(ButtonGroup)
  expect(app.component(ButtonGroup.name)).toBeTruthy()
})

describe('test button-group component props', () => {
  test('test button-group mode', () => {
    const wrapper = mount(ButtonGroup, {
      props: {
        mode: 'outline',
        vertical: false,
      },
    })
    expect(wrapper.classes()).toContain('var-button-group' + '--mode')
    wrapper.unmount()
  })

  test('test button-group vertical', () => {
    const wrapper = mount(ButtonGroup, {
      props: {
        vertical: true,
      },
    })
    expect(wrapper.classes()).toContain('var-button-group' + '--vertical')
    wrapper.unmount()
  })
})
