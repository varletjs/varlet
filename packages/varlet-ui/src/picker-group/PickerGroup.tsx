import { defineComponent, ref, type InjectionKey, type ExtractPropTypes } from 'vue'
import { props } from './props'
import './pickerGroup.less'
import { isArray } from '@varlet/shared'
import { createNamespace, call, useVModel, flatFragment } from '../utils/components'
import { useChildren } from '@varlet/use'
import '../styles/common.less'

const { name, n, classes } = createNamespace('picker-group')
export type PickerGroupProvide = Record<string, string>
export const PICKER_GROUP_KEY: InjectionKey<PickerGroupProvide> = Symbol(name)

export default defineComponent({
  name: 'VarPickerGroup',
  props,

  emits: ['confirm', 'cancel', 'update:active'],

  setup(props, { emit, slots }) {
    const activeTab = useVModel(props, 'active')

    const cancel = () => emit('cancel')

    const showNextButton = () => +activeTab.value < props.tabs.length - 1 && props.nextStepText

    const confirm = () => {
      if (showNextButton()) {
        activeTab.value = +activeTab.value + 1
      } else {
        emit(
          'confirm'
          // children.map((item) => item.confirm())
        )
      }
    }

    return () => {
      const childNodes = slots.default?.()
      console.log(props, slots)
      console.log(childNodes)
      const confirmButtonText = showNextButton() ? props.nextStepText : props.confirmButtonText

      return (
        <div class={classes(n(''))}>
          <div v-if="toolbar" class={classes(n('toolbar'))}>
            <slot name="cancel">
              <var-button var-picker-cover text onClick={cancel} class={classes(n('cancel-button'))}>
                {props.cancelButtonText}
              </var-button>
            </slot>
            <slot name="title" class={classes(n('title'))}>
              {props.title}
            </slot>
            <slot name="confirm">
              <var-button text var-picker-cover onClick={confirm} class={classes(n('confirm-button'))}>
                {confirmButtonText}
              </var-button>
            </slot>
          </div>
          <var-tabs v-model:active={activeTab.value}>
            {props.tabs.map((title, index) => (
              <var-tab>{title}</var-tab>
            ))}
          </var-tabs>
          <var-tabs-items v-model:active={activeTab.value}>
            {props.tabs.map((title, index) => (
              <var-tab-item>{childNodes?.[index]}</var-tab-item>
            ))}
          </var-tabs-items>
        </div>
      )
    }
  },
})
