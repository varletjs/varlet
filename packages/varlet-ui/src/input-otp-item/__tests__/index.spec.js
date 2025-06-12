import { createApp } from 'vue'
import { expect, test } from 'vitest'
import InputOtpItem from '..'

test('input-otp-item plugin', () => {
  const app = createApp({}).use(InputOtpItem)
  expect(app.component(InputOtpItem.name)).toBeTruthy()
})
