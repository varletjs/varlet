import './dateTimePicker.less'
import '../button/button.less'
import '../tab-item/tabItem.less'

import { defineComponent, VNodeChild, watch } from 'vue'
import { props } from './props'
import { call } from '@varlet/shared'
import { useVModel } from '@varlet/use'
import { createNamespace, flatFragment } from '../utils/components'
import VarButton from '../button'
import VarTabsItems from '../tabs-items'
import VarTabItem from '../tab-item'

const { name, n, classes } = createNamespace('date-time-picker')

export default defineComponent({
  name,
  props,
  setup(props, { slots }) {
    const activeTab = useVModel(props, 'active')
    watch(activeTab, () => {})
    const cancel = () => {
      call(props.onCancel)
    }
    let children: VNodeChild[] = call(slots.default) ?? []
    children = flatFragment(children)
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

    return () => (
      <div class={classes(n())} ref="picker">
        <VarTabsItems v-model:active={activeTab.value}>
          {children.map((child) => (
            <VarTabItem>{child}</VarTabItem>
          ))}
        </VarTabsItems>
        <div class={n('body')}>
          <div class={n('button-flex')}>
            <VarButton class={n('prev-button')} text onClick={prevStep} v-show={activeTab.value}>
              {props.prevStepText}
            </VarButton>
            <VarButton class={n('next-button')} text onClick={nextStep} v-show={activeTab.value < children.length - 1}>
              {props.nextStepText}
            </VarButton>
          </div>
          <div class={n('button-flex')}>
            <VarButton class={n('cancel-button')} text onClick={cancel}>
              {props.cancelButtonText}
            </VarButton>
            <VarButton class={n('confirm-button')} text type="primary" onClick={timeConfirm}>
              {props.confirmButtonText}
            </VarButton>
          </div>
        </div>
      </div>
    )
  },
})
