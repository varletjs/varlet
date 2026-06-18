import { expect, test } from 'vite-plus/test'
import { createApp } from 'vue'
import Breadcrumb from '..'

test('breadcrumb plugin', () => {
  const app = createApp({}).use(Breadcrumb)
  expect(app.component(Breadcrumb.name)).toBeTruthy()
})
