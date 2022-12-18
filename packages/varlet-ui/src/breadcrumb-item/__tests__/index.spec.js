import BreadcrumbItem from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test breadcrumb-item plugin', () => {
  const app = createApp({}).use(BreadcrumbItem)
  expect(app.component(BreadcrumbItem.name)).toBeTruthy()
})
