import './dateTimePicker.less'
import '../styles/elevation.less'
import { defineComponent, ref, VNodeChild, watch } from 'vue'
import { props } from './props'
import { call } from '@varlet/shared'
import Snackbar from '../snackbar'
import dayjs from 'dayjs/esm'
import { useVModel } from '@varlet/use'
import { createNamespace, flatFragment } from '../utils/components'

export default defineComponent({
  name: 'VarDateTimePicker',
  props,
  setup(props, { slots }) {
    const { name, n, classes } = createNamespace('date-time-picker')
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
              <var-tab-item>
                {child}
                <div class={n('body')}>
                  <var-button text type="primary" onClick={prevStep} v-show={activeTab.value}>
                    {props.prevStepText}
                  </var-button>
                  <var-button text type="primary" onClick={nextStep} v-show={+activeTab.value < children.length - 1}>
                    {props.nextStepText}
                  </var-button>
                  <var-button text onClick={cancel}>
                    {props.cancelButtonText}
                  </var-button>
                  <var-button text type="primary" onClick={timeConfirm}>
                    {props.confirmButtonText}
                  </var-button>
                </div>
              </var-tab-item>
            ))}
          </var-tabs-items>
        </div>
      )
    }
  },
})
