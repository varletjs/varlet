import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Result from '..'
import VarResult from '../Result'

test('result plugin', () => {
  const app = createApp({}).use(Result)
  expect(app.component(Result.name)).toBeTruthy()
})

test('result snapshot', () => {
  const wrapper = mount(Result)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

describe('test result component props', () => {
  test('result type', () => {
    ;['info', 'success', 'warning', 'error', 'question', 'empty'].forEach((type) => {
      const wrapper = mount(VarResult, {
        props: { type },
      })

      expect(wrapper.find('.var-result__image').classes()).toContain('var-result__' + type)
      wrapper.unmount()
    })
  })

  test('result imageSize', () => {
    const wrapper = mount(VarResult, {
      props: {
        type: 'empty',
        imageSize: '100px',
      },
    })

    expect(wrapper.find('.var-result__empty').attributes('style')).toContain('width: calc(90px)')
    expect(wrapper.find('.var-result__empty').attributes('style')).toContain('height: calc(90px)')

    wrapper.unmount()
  })

  test('result title', () => {
    const wrapper = mount(VarResult, {
      props: { title: 'This is title' },
    })

    expect(wrapper.find('.var-result__title').element.textContent).toBe('This is title')
    wrapper.unmount()
  })

  test('result description', () => {
    const wrapper = mount(VarResult, {
      props: { description: 'This is description' },
    })

    expect(wrapper.find('.var-result__description').element.textContent).toBe('This is description')
    wrapper.unmount()
  })
})
