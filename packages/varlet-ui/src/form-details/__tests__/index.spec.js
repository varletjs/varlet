import FormDetails from '..'
import { createApp } from 'vue'
import { expect } from 'vitest'

test('test form details plugin', () => {
  const app = createApp({}).use(FormDetails)
  expect(app.component(FormDetails.name)).toBeTruthy()
})
