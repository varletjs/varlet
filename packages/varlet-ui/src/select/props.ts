import { SelectHTMLAttributes, VNode, VNodeChild, type PropType } from 'vue'
import { fieldDecoratorProps } from '../field-decorator'
import { defineListenerProp, pickProps } from '../utils/components'

export type SelectValidateTrigger = 'onFocus' | 'onBlur' | 'onChange' | 'onClick' | 'onClear' | 'onClose'

export type SelectTextAlign = 'left' | 'right' | 'center'

export type SelectOptionLabelRender = (option: SelectOption, checked: boolean) => VNodeChild

export type SelectOptionLabel = string | VNode | SelectOptionLabelRender

export type SelectFilterMethod = (pattern: string, option: SelectOption) => boolean

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
  options: {
    type: Array as PropType<SelectOption[]>,
    default: () => [],
  },
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
  rules: [Array, Function, Object] as PropType<any>,
  tabindex: String as PropType<SelectHTMLAttributes['tabindex']>,
  filterable: Boolean,
  filter: {
    type: Function as PropType<SelectFilterMethod>,
    default: (pattern: string, option: SelectOption) => {
      return String(option.label ?? option.value ?? '')
        .toLocaleLowerCase()
        .includes(pattern.toLocaleLowerCase())
    },
  },
  onFocus: defineListenerProp<() => void>(),
  onBlur: defineListenerProp<() => void>(),
  onClose: defineListenerProp<(value: any) => void>(),
  onChange: defineListenerProp<(value: any) => void>(),
  onClear: defineListenerProp<(value: any) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: any) => void>(),
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
