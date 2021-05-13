import { createApp } from 'vue'
import FormDetails from '..'

test('test form details plugin', () => {
  const app = createApp({}).use(FormDetails)
  expect(app.component(FormDetails.name)).toBeTruthy()
})
