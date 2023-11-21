import './dateTimePicker.less'
import '../button/button.less'

import { defineComponent, VNodeChild, watch } from 'vue'
import { props } from './props'
import { call } from '@varlet/shared'
import { useVModel } from '@varlet/use'
import { createNamespace, flatFragment } from '../utils/components'
import VarButton from '../button'

const { n, classes } = createNamespace('date-time-picker')

export default defineComponent({
  props,
  setup(props, { slots }) {
    const activeTab = useVModel(props, 'active')
    watch(activeTab, () => {})

    return () => {
      const cancel = () => {
        call(props.onCancel)
      }
      let children: VNodeChild[] = call(slots.default) ?? []
      children = flatFragment(children)
      const nextStep = () => {
        activeTab.value = +activeTab.value + 1
      }
      const prevStep = () => {
        if (activeTab.value) {
          activeTab.value = +activeTab.value - 1
        }
      }
      const timeConfirm = () => {
        call(props.onConfirm)
      }

      return (
        <div class={classes(n())} ref="picker">
          <var-tabs-items v-model:active={activeTab.value}>
            {children.map((child) => (
              <var-tab-item>{child}</var-tab-item>
            ))}
          </var-tabs-items>
          <div class={n('body')}>
            <div class={n('button-flex')}>
              <var-button class={n('prev-button')} text onClick={prevStep} v-show={activeTab.value}>
                {props.prevStepText}
              </var-button>
              <var-button
                class={n('next-button')}
                text
                onClick={nextStep}
                v-show={+activeTab.value < children.length - 1}
              >
                {props.nextStepText}
              </var-button>
            </div>
            <div class={n('button-flex')}>
              <var-button class={n('cancel-button')} text onClick={cancel}>
                {props.cancelButtonText}
              </var-button>
              <var-button class={n('confirm-button')} text type="primary" onClick={timeConfirm}>
                {props.confirmButtonText}
              </var-button>
            </div>
          </div>
        </div>
      )
    }
  },
})
