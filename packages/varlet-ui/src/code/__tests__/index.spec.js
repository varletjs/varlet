import { createApp, h } from 'vue'
import { mount } from '@vue/test-utils'
import { codeToHtml } from 'shiki'
import { describe, expect, test } from 'vitest'
import Code from '..'
import VarHighlighterProvider from '../../highlighter-provider'
import { delay } from '../../utils/test'
import VarCode from '../Code'

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

  test('test code word-wrap', async () => {
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
            wordWrap: true,
          }),
      },
    })

    await delay(300)
    expect(wrapper.find('.var-code--word-wrap').exists()).toBe(true)

    wrapper.unmount()
  })

  test('test code trim', async () => {
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
            code: "   console.log('hello world')   ",
            language: 'javascript',
          }),
      },
    })

    await delay(300)
    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
  })

  test('test code no trim', async () => {
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
            code: "   console.log('hello world')   ",
            language: 'javascript',
            trim: false,
          }),
      },
    })

    await delay(300)
    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
  })
})
