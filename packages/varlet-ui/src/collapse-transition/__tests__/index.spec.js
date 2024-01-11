import CollapseTransition from '..'
import VarCollapseTransition from '../CollapseTransition'
import { mount } from '@vue/test-utils'
import { createApp, ref } from 'vue'
import { delay } from '../../utils/test'
import { expect, describe, test } from 'vitest'

describe('test collapseTransition render', () => {
  test('test collapseTransition use', () => {
    const app = createApp({}).use(CollapseTransition)

    expect(app.component(CollapseTransition.name)).toBeTruthy()
  })
})

describe('test collapseTransition props', () => {
  test('test collapseTransition expand', async () => {
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
