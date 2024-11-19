import CountTo from '..'
import { createApp } from 'vue'
import { expect, test } from 'vitest'

test('test count-to plugin', () => {
  const app = createApp({}).use(CountTo)
  expect(app.component(CountTo.name)).toBeTruthy()
})
