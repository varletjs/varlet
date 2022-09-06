import VirtualList from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test virtualList use', () => {
  const app = createApp({}).use(VirtualList)
  expect(app.component(VirtualList.name)).toBeTruthy()
})
