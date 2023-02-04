import ButtonGroup from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test button-group plugin', () => {
  const app = createApp({}).use(ButtonGroup)
  expect(app.component(ButtonGroup.name)).toBeTruthy()
})
