import Code from '..'
import VarCode from '../Code'
import VarHighlighterProvider from '../../highlighter-provider'
import { mount } from '@vue/test-utils'
import { createApp, h } from 'vue'
import { delay } from '../../utils/test'
import { expect, describe, test } from 'vitest'
import { codeToHtml } from 'shiki'

const code = `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const theOther = target - num;
      if (map.has(theOther)) {
          return [map.get(theOther), i];
      }
      map.set(num, i);
  }
};`

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
      },
      slots: {
        default: () =>
          h(VarCode, {
            props: {
              code,
              language: 'javascript',
              theme: 'monokai',
            },
          }),
      },
    })

    await delay(300)
    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
  })

  test('test code lang', async () => {
    const wrapper = mount(VarHighlighterProvider, {
      props: {
        highlighter: {
          codeToHtml,
        },
      },
      slots: {
        default: () =>
          h(VarCode, {
            props: {
              content: code,
              lang: 'javascript',
            },
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
            props: {
              code,
              language: 'javascript',
              theme: 'material-theme',
            },
          }),
      },
    })

    await delay(300)
    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
  })
})
