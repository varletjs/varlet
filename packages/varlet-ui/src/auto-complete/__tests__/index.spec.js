import AutoComplete from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'

test('test auto-complete plugin', () => {
  const app = createApp({}).use(AutoComplete)
  expect(app.component(AutoComplete.name)).toBeTruthy()
})
