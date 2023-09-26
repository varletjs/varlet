import { type PropType } from 'vue'
import { defineListenerProp, pickProps } from '../utils/components'
import { popupProps } from '../popup'

export type PickerColumnOption = {
  text?: string | number
  value?: string | number
  children?: PickerColumnOption[]
  className?: string
  textClassName?: string

  [key: PropertyKey]: any
}

export const props = {
  modelValue: {
    type: Array as PropType<(string | number)[]>,
    default: () => [],
  },
  columns: {
    type: Array as PropType<PickerColumnOption[] | PickerColumnOption[][]>,
    default: () => [],
  },
  title: String,
  textKey: {
    type: String,
    default: 'text',
  },
  valueKey: {
    type: String,
    default: 'value',
  },
  childrenKey: {
    type: String,
    default: 'children',
  },
  toolbar: {
    type: Boolean,
    default: true,
  },
  cascade: Boolean,
  optionHeight: {
    type: [Number, String],
    default: 44,
  },
  optionCount: {
    type: [Number, String],
    default: 6,
  },
  confirmButtonText: String,
  cancelButtonText: String,
  confirmButtonTextColor: String,
  cancelButtonTextColor: String,
  // dynamic internal
  dynamic: Boolean,
  onChange:
    defineListenerProp<(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) => void>(),
  onConfirm:
    defineListenerProp<(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) => void>(),
  onCancel:
    defineListenerProp<(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) => void>(),
  'onUpdate:modelValue': defineListenerProp<(values: (string | number)[]) => void>(),
  // dynamic internal
  ...pickProps(popupProps, [
    'show',
    'onUpdate:show',
    'closeOnClickOverlay',
    'teleport',
    'safeArea',
    'onOpen',
    'onClose',
    'onOpened',
    'onClosed',
    'onClickOverlay',
    'onRouteChange',
  ]),
}
