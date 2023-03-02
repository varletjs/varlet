import Fab from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test fab plugin', () => {
  const app = createApp({}).use(Fab)
  expect(app.component(Fab.name)).toBeTruthy()
})
