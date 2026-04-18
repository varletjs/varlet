import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { createApp } from 'vue'
import Result from '..'
import VarResult from '../Result'

test('result plugin', () => {
  const app = createApp({}).use(Result)
  expect(app.component(Result.name)).toBeTruthy()
})

test('result default render', () => {
  const wrapper = mount(Result)
  expect(wrapper.find('.var-result__image').classes()).toContain('var-result__success')
  expect(wrapper.find('.var-result__image-container').exists()).toBe(true)
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

    const style = wrapper.find('.var-result__empty').attributes('style')
    expect(style).toMatch(/width: calc\((100px \* 0\.9|90px)\)/)
    expect(style).toMatch(/height: calc\((100px \* 0\.9|90px)\)/)

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
