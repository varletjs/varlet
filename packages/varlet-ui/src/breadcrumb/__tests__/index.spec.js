import Breadcrumbs from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test breadcrumbs plugin', () => {
  const app = createApp({}).use(Breadcrumbs)
  expect(app.component(Breadcrumbs.name)).toBeTruthy()
})
