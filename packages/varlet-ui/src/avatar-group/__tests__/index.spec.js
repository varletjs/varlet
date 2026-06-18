import { mount } from '@vue/test-utils'
import { expect, test } from 'vite-plus/test'
import { createApp } from 'vue'
import AvatarGroup from '..'
import VarAvatarGroup from '../AvatarGroup.vue'

test('avatar group plugin', () => {
  const app = createApp({}).use(AvatarGroup)
  expect(app.component(AvatarGroup.name)).toBeTruthy()
})

test('avatar group classes and offset style', async () => {
  const wrapper = mount(VarAvatarGroup, {
    props: {
      vertical: true,
      offset: 12,
    },
  })

  expect(wrapper.classes()).toContain('var-avatar-group')
  expect(wrapper.classes()).toContain('var-avatar-group--column')
  expect(wrapper.classes()).not.toContain('var-avatar-group--row')
  expect(wrapper.element.style.getPropertyValue('--avatar-group-offset')).toBe('12px')

  await wrapper.setProps({ vertical: false })
  expect(wrapper.classes()).toContain('var-avatar-group--row')
  expect(wrapper.classes()).not.toContain('var-avatar-group--column')

  wrapper.unmount()
})

test('avatar group without offset', () => {
  const wrapper = mount(VarAvatarGroup)

  expect(wrapper.element.style.getPropertyValue('--avatar-group-offset')).toBe('')

  wrapper.unmount()
})
