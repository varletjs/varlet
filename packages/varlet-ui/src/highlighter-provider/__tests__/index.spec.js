import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { codeToHtml } from 'shiki'
import { expect, test } from 'vitest'
import VarHighlighterProvider from '../HighlighterProvider'
import HighlighterProvider from '../index'

test('test highlighterProvider component plugin', () => {
  const app = createApp({}).use(HighlighterProvider)
  expect(app.component(HighlighterProvider.name)).toBeTruthy()
})

test('test highlighterProvider highlighter', () => {
  const wrapper = mount(VarHighlighterProvider, {
    props: {
      highlighter: {
        codeToHtml,
      },
    },
  })
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('test highlighterProvider tag', () => {
  const wrapper = mount(VarHighlighterProvider, { props: { tag: 'span' } })
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})
