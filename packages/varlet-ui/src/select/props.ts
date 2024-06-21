import { VNode, VNodeChild, type PropType } from 'vue'
import { defineListenerProp, pickProps } from '../utils/components'
import { fieldDecoratorProps } from '../field-decorator'

export type SelectValidateTrigger = 'onFocus' | 'onBlur' | 'onChange' | 'onClick' | 'onClear' | 'onClose'

export type SelectTextAlign = 'left' | 'right' | 'center'

export type SelectOptionLabelRender = (option: SelectOption, checked: boolean) => VNodeChild

export type SelectOptionLabel = string | VNode | SelectOptionLabelRender

export interface SelectOption {
  label?: SelectOptionLabel
  value?: any
  disabled?: boolean

  [key: PropertyKey]: any
}

export const props = {
  modelValue: {
    type: [String, Number, Boolean, Array] as PropType<any>,
    default: undefined,
  },
  options: Array as PropType<Array<SelectOption>>,
  labelKey: {
    type: String,
    default: 'label',
  },
  valueKey: {
    type: String,
    default: 'value',
  },
  multiple: Boolean,
  offsetY: {
    type: [String, Number],
    default: 0,
  },
  chip: Boolean,
  readonly: Boolean,
  separator: {
    type: String,
    default: ',',
  },
  textAlign: {
    type: String as PropType<SelectTextAlign>,
    default: 'left',
  },
  validateTrigger: {
    type: Array as PropType<Array<SelectValidateTrigger>>,
    default: () => ['onChange', 'onClear', 'onClose'],
  },
  rules: Array as PropType<Array<(v: any) => any>>,
  onFocus: defineListenerProp<() => void>(),
  onBlur: defineListenerProp<() => void>(),
  onClose: defineListenerProp<(value: any) => void>(),
  onChange: defineListenerProp<(value: any) => void>(),
  onClear: defineListenerProp<(value: any) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: any) => void>(),
  // dynamic internal
  ...pickProps(fieldDecoratorProps, [
    'size',
    'variant',
    'placeholder',
    'line',
    'hint',
    'textColor',
    'focusColor',
    'blurColor',
    'disabled',
    'clearable',
    'onClick',
  ]),
}
