import { mount } from '@vue/test-utils'
import { expect, test } from 'vite-plus/test'
import { createApp, h } from 'vue'
import VarActionSheet from '../ActionSheet'
import ActionSheet from '../index'

test('action-sheet component plugin', () => {
  const app = createApp({}).use(ActionSheet.Component)
  expect(app.component(ActionSheet.Component.name)).toBeTruthy()
})

test('action-sheet styles', () => {
  const wrapper = mount(VarActionSheet, {
    props: {
      teleport: null,
      actions: [
        {
          name: 'Item 01',
          icon: 'account-circle',
          iconSize: '30px',
          color: '#4caf50',
          className: 'customClass',
        },
        {
          name: 'Item 02',
          icon: 'account-circle',
          disabled: true,
        },
      ],
      show: true,
      safeArea: true,
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

test('action-sheet action supports vnode and render icon', () => {
  const wrapper = mount(VarActionSheet, {
    props: {
      teleport: null,
      actions: [
        {
          name: 'Item 01',
          icon: h('i', { class: 'i-custom-action' }),
        },
        {
          name: 'Item 02',
          icon: () => h('i', { class: 'i-custom-action-render' }),
        },
      ],
      show: true,
    },
  })

  expect(wrapper.find('.i-custom-action').exists()).toBe(true)
  expect(wrapper.find('.i-custom-action-render').exists()).toBe(true)
  expect(wrapper.find('.var-icon').exists()).toBe(false)
  wrapper.unmount()
})
