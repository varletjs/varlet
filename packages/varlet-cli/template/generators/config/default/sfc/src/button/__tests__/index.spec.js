import { createApp } from 'vue'
import { expect, test } from 'vitest'
import Button from '..'

test('test button use', () => {
  const app = createApp({}).use(Button)
  expect(app.component(Button.name)).toBeTruthy()
})
