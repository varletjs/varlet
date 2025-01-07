import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import VarActionSheet from '../ActionSheet'
import ActionSheet from '../index'

test('test action-sheet component plugin', () => {
  const app = createApp({}).use(ActionSheet.Component)
  expect(app.component(ActionSheet.Component.name)).toBeTruthy()
})

test('test action-sheet styles', () => {
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
