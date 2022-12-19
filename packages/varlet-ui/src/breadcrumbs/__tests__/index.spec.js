import breadcrumbs from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test breadcrumbs plugin', () => {
  const app = createApp({}).use(breadcrumbs)
  expect(app.component(breadcrumbs.name)).toBeTruthy()
})
