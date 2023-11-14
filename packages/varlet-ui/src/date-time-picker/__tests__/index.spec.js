import DateTimePicker from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test date-time-picker plugin', () => {
  const app = createApp({}).use(DateTimePicker)
  expect(app.component(DateTimePicker.name)).toBeTruthy()
})
