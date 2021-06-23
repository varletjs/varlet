import example from '../example'
import ImagePreview from '..'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'

test('test imagePreview example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test imagePreview plugin', () => {
  const app = createApp({}).use(ImagePreview)
  expect(app.component(ImagePreview.name)).toBeTruthy()
})
