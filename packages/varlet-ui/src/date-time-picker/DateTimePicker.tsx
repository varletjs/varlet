import './dateTimePicker.less'
import '../button/button.less'
import '../tab-item/tabItem.less'

import { defineComponent, watch } from 'vue'
import { props } from './props'
import { call } from '@varlet/shared'
import { useVModel } from '@varlet/use'
import { createNamespace, flatFragment } from '../utils/components'
import Button from '../button'
import TabsItems from '../tabs-items'
import TabItem from '../tab-item'
import { pack } from '../locale'

const { name, n, classes } = createNamespace('date-time-picker')

export default defineComponent({
  name,
  props,
  setup(props, { slots }) {
    const activeTab = useVModel(props, 'active')
    watch(activeTab, () => {})

    return () => {
      const { prevStepText, nextStepText, cancelButtonText, confirmButtonText } = props
      const children = flatFragment(call(slots.default) ?? [])

      const nextStep = () => {
        activeTab.value += 1
      }
      const prevStep = () => {
        if (activeTab.value) {
          activeTab.value -= 1
        }
      }
      const timeConfirm = () => {
        call(props.onConfirm)
      }
      const cancel = () => {
        call(props.onCancel)
      }

      return (
        <div class={classes(n())} ref="picker">
          <TabsItems v-model:active={activeTab.value}>
            {children.map((child) => (
              <TabItem>{child}</TabItem>
            ))}
          </TabsItems>
          <div class={n('body')}>
            <div>
              <Button class={n('prev-button')} text onClick={prevStep} v-show={activeTab.value}>
                {prevStepText ?? pack.value.prevStepText}
              </Button>
              <Button class={n('next-button')} text onClick={nextStep} v-show={activeTab.value < children.length - 1}>
                {nextStepText ?? pack.value.nextStepText}
              </Button>
            </div>
            <div>
              <Button class={n('cancel-button')} text onClick={cancel}>
                {cancelButtonText ?? pack.value.cancelButtonText}
              </Button>
              <Button class={n('confirm-button')} text type="primary" onClick={timeConfirm}>
                {confirmButtonText ?? pack.value.confirmButtonText}
              </Button>
            </div>
          </div>
        </div>
      )
    }
  },
})
