import SpeedDial from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test speed-dial plugin', () => {
  const app = createApp({}).use(SpeedDial)
  expect(app.component(SpeedDial.name)).toBeTruthy()
})
