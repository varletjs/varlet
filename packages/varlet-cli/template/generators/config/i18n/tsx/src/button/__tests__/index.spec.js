import Button from '../index'
import { createApp } from 'vue'
import { expect } from 'vitest'

test('test button use', () => {
  const app = createApp({}).use(Button)
  expect(app.component(Button.name)).toBeTruthy()
})
