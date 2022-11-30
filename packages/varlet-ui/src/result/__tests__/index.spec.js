import Result from '..'
import VarResult from '../Result'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test result plugin', () => {
  const app = createApp({}).use(Result)
  expect(app.component(Result.name)).toBeTruthy()
})

test('test result snapshot', () => {
  const wrapper = mount(Result)
  expect(wrapper.html()).toMatchSnapshot()
})

describe('test result component props', () => {
  test('test result type', () => {
    ;['info', 'success', 'warning', 'error', 'question', 'empty'].forEach((type) => {
      const wrapper = mount(VarResult, {
        props: { type },
      })

      expect(wrapper.find('.var-result__image').classes()).toContain('var-result__' + type)
      wrapper.unmount()
    })
  })

  test('test result imageSize', () => {
    const wrapper = mount(VarResult, {
      props: {
        type: 'empty',
        imageSize: '100px',
      },
    })

    expect(wrapper.find('.var-result__empty').attributes('style')).toContain('width: calc(100px * 0.9)')
    expect(wrapper.find('.var-result__empty').attributes('style')).toContain('height: calc(100px * 0.9)')

    wrapper.unmount()
  })

  test('test result title', () => {
    const wrapper = mount(VarResult, {
      props: { title: 'This is title' },
    })

    expect(wrapper.find('.var-result__title').element.textContent).toBe('This is title')
    wrapper.unmount()
  })

  test('test result description', () => {
    const wrapper = mount(VarResult, {
      props: { description: 'This is description' },
    })

    expect(wrapper.find('.var-result__description').element.textContent).toBe('This is description')
    wrapper.unmount()
  })
})
