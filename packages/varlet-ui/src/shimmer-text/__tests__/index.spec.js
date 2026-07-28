import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vite-plus/test'
import { createApp } from 'vue'
import ShimmerText from '..'
import VarShimmerText from '../ShimmerText.vue'

test('shimmer text plugin', () => {
  const app = createApp({}).use(ShimmerText)
  expect(app.component(ShimmerText.name)).toBeTruthy()
})

describe('test shimmer text component props', () => {
  test('should render default slot', () => {
    const wrapper = mount(VarShimmerText, {
      slots: {
        default: () => 'Generating',
      },
    })

    expect(wrapper.classes()).toContain('var-shimmer-text')
    expect(wrapper.classes()).toContain('var-shimmer-text--default')
    expect(wrapper.text()).toBe('Generating')
    wrapper.unmount()
  })

  test('should support theme types', async () => {
    const wrapper = mount(VarShimmerText)

    for (const type of ['default', 'primary', 'info', 'success', 'warning', 'danger']) {
      await wrapper.setProps({ type })
      expect(wrapper.classes()).toContain(`var-shimmer-text--${type}`)
    }

    wrapper.unmount()
  })
})
