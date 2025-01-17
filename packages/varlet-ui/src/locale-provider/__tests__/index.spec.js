import { createApp, h } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import DatePicker from '../../date-picker'
import Dialog from '../../dialog/Dialog.vue'
import Locale from '../../locale'
import LocaleProvider from '../index'

test('localeProvider component plugin', () => {
  const app = createApp({}).use(LocaleProvider)
  expect(app.component(LocaleProvider.name)).toBeTruthy()
})

test('localeProvider tag', async () => {
  const wrapper = mount(LocaleProvider)
  expect(wrapper.html()).toMatchSnapshot()
  await wrapper.setProps({ tag: 'span' })
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('localeProvider locale', async () => {
  const container = document.createElement('div')
  const wrapper = mount(LocaleProvider, {
    props: {
      messages: {
        'zh-CN': Locale.zhCN,
        'en-US': Locale.enUS,
      },
    },
    slots: {
      default: () =>
        h('div', [h(Dialog, { show: true, teleport: container }), h(DatePicker, { modelValue: '2021-04-08' })]),
    },
  })
  expect(container.innerHTML).toMatchSnapshot()
  expect(wrapper.html()).toMatchSnapshot()
  expect(container.innerHTML).contains('确认')
  expect(container.innerHTML).contains('取消')
  expect(container.innerHTML).contains('提示')
  await wrapper.setProps({ locale: 'en-US' })
  expect(container.innerHTML).toMatchSnapshot()
  expect(wrapper.html()).toMatchSnapshot()
  expect(container.innerHTML).contains('Confirm')
  expect(container.innerHTML).contains('Cancel')
  expect(container.innerHTML).contains('Hint')

  wrapper.unmount()
})
