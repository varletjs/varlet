import ActionSheet from '../index'
import VarActionSheet from '../ActionSheet'
import example from '../example'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import { delay } from '../../utils/jest'

test('test action-sheet example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})

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
      mounted: false,
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
      <div class="container">
        <var-action-sheet teleport=".container" :actions="actions" v-if="mounted" />
      </div>
    `,
  }
  const wrapper = mount(Wrapper, { attachTo: document.body })
  await wrapper.setData({ mounted: true })

  expect(wrapper.html()).toMatchSnapshot()
  wrapper.unmount()
})
