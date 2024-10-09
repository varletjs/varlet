import Code from '..'
import VarCode from '../Code'
import VarHighlighterProvider from '../../highlighter-provider'
import { mount } from '@vue/test-utils'
import { createApp, h } from 'vue'
import { delay } from '../../utils/test'
import { expect, describe, test } from 'vitest'
import { codeToHtml } from 'shiki'

test('test code use', () => {
  const app = createApp({}).use(Code)
  expect(app.component(Code.name)).toBeTruthy()
})

describe('test code component props', () => {
  test('test code content', async () => {
    const wrapper = mount(VarHighlighterProvider, {
      props: {
        highlighter: {
          codeToHtml,
        },
        theme: 'vitesse-light',
      },
      slots: {
        default: () =>
          h(VarCode, {
            code: "console.log('hello world')",
            language: 'javascript',
          }),
      },
    })

    await delay(300)
    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
  })

  test('test code language', async () => {
    const wrapper = mount(VarHighlighterProvider, {
      props: {
        highlighter: {
          codeToHtml,
        },
        theme: 'vitesse-light',
      },
      slots: {
        default: () =>
          h(VarCode, {
            code: "print('Hello Varlet UI')",
            language: 'python',
          }),
      },
    })

    await delay(300)
    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
  })

  test('test code theme', async () => {
    const wrapper = mount(VarHighlighterProvider, {
      props: {
        highlighter: {
          codeToHtml,
        },
      },
      slots: {
        default: () =>
          h(VarCode, {
            code: "console.log('hello world')",
            language: 'javascript',
            theme: 'material-theme',
          }),
      },
    })

    await delay(300)
    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
  })
})
