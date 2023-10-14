import { popupProps } from '../popup'
import { type PropType } from 'vue'
import { defineListenerProp, pickProps } from '../utils/components'

export type PickerColumnOption = {
  text?: string | number
  value?: string | number
  children?: PickerColumnOption[]
  className?: string
  textClassName?: string

  [key: PropertyKey]: any
}

export type PickerGroupOption = {
  title?: string
  cancelButtonText?: string
  confirmButtonTextColor?: string
  tabs: PickerColumnOption[]
}

export const props = {
  title: {
    type: String,
    default: '预约日期',
  },
  active: {
    type: Number,
    default: 0,
  },
  toolbar: {
    type: Boolean,
    default: true,
  },
  confirmButtonText: {
    type: String,
    default: '确认',
  },
  nextStepText: String,
  cancelButtonText: {
    type: String,
    default: '取消',
  },
  tabs: {
    type: Array<string>,
    default: ['选择日期', '选择时间'],
  },
  onChange:
    defineListenerProp<(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) => void>(),
  onConfirm:
    defineListenerProp<(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) => void>(),
  onCancel:
    defineListenerProp<(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) => void>(),
  'onUpdate:modelValue': defineListenerProp<(values: (string | number)[]) => void>(),
  // dynamic internal
  ...pickProps(popupProps, [
    // 'show',
    // 'onUpdate:show',
    // 'closeOnClickOverlay',
    // 'teleport',
    // 'safeArea',
    // 'onOpen',
    // 'onClose',
    // 'onOpened',
    // 'onClosed',
    // 'onClickOverlay',
    // 'onRouteChange',
  ]),
}
