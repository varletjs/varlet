import WaterMark from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test water-mark plugin', () => {
  const app = createApp({}).use(WaterMark)
  expect(app.component(WaterMark.name)).toBeTruthy()
})
