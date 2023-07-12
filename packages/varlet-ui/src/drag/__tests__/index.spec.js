import Drag from '..'
import { createApp } from 'vue'

test('test drag plugin', () => {
  const app = createApp({}).use(Drag)
  expect(app.component(Drag.name)).toBeTruthy()
})
