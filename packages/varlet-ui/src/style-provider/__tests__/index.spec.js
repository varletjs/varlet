import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import { delay } from '../../utils/test'
import StyleProvider from '../index'
import VarStyleProvider from '../StyleProvider'

test('styleProvider component plugin', () => {
  const app = createApp({}).use(StyleProvider)
  expect(app.component(StyleProvider.Component.name)).toBeTruthy()
})

test('styleProvider plugin', () => {
  const app = createApp({}).use(VarStyleProvider)
  expect(app.component(VarStyleProvider.name)).toBeTruthy()
})

test('styleProvider functional', async () => {
  StyleProvider({
    '--cell-font-size': '30px',
  })

  await delay(0)
  expect(getComputedStyle(document.documentElement).getPropertyValue('--cell-font-size')).toBe('30px')
})

test('styleProvider component', async () => {
  const wrapper = mount(VarStyleProvider)

  const el = wrapper.find('.var-style-provider')
  expect(el.exists()).toBe(true)

  await wrapper.setProps({
    styleVars: {
      '--cell-font-size': '30px',
    },
  })
  expect(el.attributes('style')).toBe('--cell-font-size: 30px;')
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})

test('styleProvider tag', () => {
  const wrapper = mount(VarStyleProvider, { props: { tag: 'span' } })
  expect(wrapper.html()).toMatchSnapshot()

  wrapper.unmount()
})
