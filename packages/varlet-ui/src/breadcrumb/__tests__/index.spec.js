import breadcrumb from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test breadcrumb plugin', () => {
  const app = createApp({}).use(breadcrumb)
  expect(app.component(breadcrumb.name)).toBeTruthy()
})
