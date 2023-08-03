import Watermark from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test watermark plugin', () => {
  const app = createApp({}).use(Watermark)
  expect(app.component(Watermark.name)).toBeTruthy()
})
