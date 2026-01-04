import { createApp } from 'vue'
import { expect, test } from 'vitest'
import VirtualList from '..'

test('virtual-list plugin', () => {
  const app = createApp({}).use(VirtualList)
  expect(app.component(VirtualList.name)).toBeTruthy()
})
