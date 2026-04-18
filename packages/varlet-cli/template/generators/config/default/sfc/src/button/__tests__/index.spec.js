import { expect, test } from 'vite-plus/test'
import { createApp } from 'vue'
import Button from '..'

test('test button use', () => {
  const app = createApp({}).use(Button)
  expect(app.component(Button.name)).toBeTruthy()
})
