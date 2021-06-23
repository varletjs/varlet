import ActionSheet from '../index'
import VarActionSheet from '../ActionSheet'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test action-sheet component plugin', () => {
  const app = createApp({}).use(ActionSheet.Component)
  expect(app.component(ActionSheet.Component.name)).toBeTruthy()
})

test('test action-sheet styles', async () => {
  const Wrapper = {
    components: {
      [VarActionSheet.name]: VarActionSheet,
    },
    data: () => ({
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
    }),
    template: `
      <var-action-sheet :actions="actions" />
    `,
  }
  const wrapper = mount(Wrapper)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})
