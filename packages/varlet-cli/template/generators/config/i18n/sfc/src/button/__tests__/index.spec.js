import { expect, test } from 'vitest'
import { createApp } from 'vue'
import Button from '../index'

test('test button use', () => {
  const app = createApp({}).use(Button)
  expect(app.component(Button.name)).toBeTruthy()
})
