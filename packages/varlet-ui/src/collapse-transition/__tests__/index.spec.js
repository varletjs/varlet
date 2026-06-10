import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vite-plus/test'
import { createApp, ref } from 'vue'
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

    const content = wrapper.find('.var-collapse-transition__content')

    expand.value = false
    await delay(50)
    const transitionStartEvent = new Event('transitionstart')
    Object.assign(transitionStartEvent, { propertyName: 'height' })
    content.element.dispatchEvent(transitionStartEvent)

    const transitionEndEvent = new Event('transitionend')
    Object.assign(transitionEndEvent, { propertyName: 'height' })
    content.element.dispatchEvent(transitionEndEvent)
    await delay(0)
    expect(wrapper.vm.expand).toBeFalsy()
    expect(content.attributes('style')).toBe('display: none;')

    wrapper.unmount()
  })
})
