import { createApp, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import CollapseTransition from '..'
import { delay } from '../../utils/test'
import VarCollapseTransition from '../CollapseTransition'

describe('test collapseTransition render', () => {
  test('collapseTransition use', () => {
    const app = createApp({}).use(CollapseTransition)

    expect(app.component(CollapseTransition.name)).toBeTruthy()
  })
})

describe('test collapseTransition props', () => {
  test('collapseTransition expand', async () => {
    const expand = ref(true)
    const template = `
     <var-collapse-transition :expand="expand">
      test
     </var-collapse-transition>
    `

    const wrapper = mount({
      components: {
        [VarCollapseTransition.name]: VarCollapseTransition,
      },
      template,
      setup() {
        return {
          expand,
        }
      },
    })

    await delay(0)
    expect(wrapper.vm.expand).toBeTruthy()
    expect(wrapper.find('.var-collapse-transition__content').attributes('style')).toBe('')

    expand.value = false
    await delay(200)
    expect(wrapper.vm.expand).toBeFalsy()
    expect(wrapper.find('.var-collapse-transition__content').attributes('style')).toBe('display: none;')

    wrapper.unmount()
  })
})
