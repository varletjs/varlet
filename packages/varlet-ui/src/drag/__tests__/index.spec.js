import Drag from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test drag plugin', () => {
  const app = createApp({}).use(Drag)
  expect(app.component(Drag.name)).toBeTruthy()
})
