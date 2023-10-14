import PickerGroup from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test picker-group plugin', () => {
  const app = createApp({}).use(PickerGroup)
  expect(app.component(PickerGroup.name)).toBeTruthy()
})
