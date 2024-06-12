import LocaleProvider from '../index'
import Dialog from '../../dialog/Dialog.vue'
import Locale from '../../locale'
import { createApp, h } from 'vue'
import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

Locale.add('en-US', Locale.enUS)

test('test localeProvider component plugin', () => {
  const app = createApp({}).use(LocaleProvider)
  expect(app.component(LocaleProvider.name)).toBeTruthy()
})

test('test localeProvider tag', async () => {
  const wrapper = mount(LocaleProvider)
  expect(wrapper.html()).toMatchSnapshot()
  await wrapper.setProps({ tag: 'span' })
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('test localeProvider locale', async () => {
  const container = document.createElement('div')
  const wrapper = mount(LocaleProvider, {
    slots: {
      default: () => h(Dialog, { show: true, teleport: container }),
    },
  })
  expect(container.innerHTML).toMatchSnapshot()
  expect(container.innerHTML).contains('确认')
  expect(container.innerHTML).contains('取消')
  expect(container.innerHTML).contains('提示')
  await wrapper.setProps({ locale: 'en-US' })
  expect(container.innerHTML).toMatchSnapshot()
  expect(container.innerHTML).contains('Confirm')
  expect(container.innerHTML).contains('Cancel')
  expect(container.innerHTML).contains('Hint')
  wrapper.unmount()
})
