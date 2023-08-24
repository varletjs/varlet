import Grid from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test grid plugin', () => {
  const app = createApp({}).use(Grid)
  expect(app.component(Grid.name)).toBeTruthy()
})
