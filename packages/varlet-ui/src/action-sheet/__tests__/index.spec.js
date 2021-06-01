import example from '../example'
import ActionSheet from '..'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test actionSheet example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test actionSheet plugin', () => {
  const app = createApp({}).use(ActionSheet)
  expect(app.component(ActionSheet.name)).toBeTruthy()
})
