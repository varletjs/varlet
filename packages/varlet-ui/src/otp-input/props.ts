import { type PropType } from 'vue'
import { fieldDecoratorProps } from '../field-decorator'
import { defineListenerProp, pickProps } from '../utils/components'

export type OtpInputType = 'digit' | 'text' | 'alphanumeric'

export type OtpInputValidateTrigger = 'onInput' | 'onClick' | 'onPaste' | 'onComplete'

export const props = {
  modelValue: {
    type: String,
    default: '',
  },
  length: {
    type: [String, Number],
    default: 6,
  },
  type: {
    type: String as PropType<OtpInputType>,
    default: 'digit',
  },
  mask: Boolean,
  maskSymbol: {
    type: String,
    default: '•',
  },
  cellHeight: {
    type: [String, Number],
    default: 48,
  },
  cellMaxWidth: {
    type: [String, Number],
    default: 48,
  },
  disabled: Boolean,
  readonly: Boolean,
  autofocus: Boolean,
  gutter: {
    type: [String, Number],
    default: 8,
  },
  validateTrigger: {
    type: Array as PropType<OtpInputValidateTrigger[]>,
    default: () => ['onInput', 'onComplete'],
  },
  rules: [Array, Function, Object] as PropType<any>,
  autoBlur: {
    type: Boolean,
    default: true,
  },
  allowPaste: {
    type: Boolean,
    default: true,
  },
  pasteTransform: Function as PropType<(value: string) => string>,
  onInput: defineListenerProp<(value: string) => void>(),
  onClick: defineListenerProp<(e: Event) => void>(),
  onPaste: defineListenerProp<(value: string, e: ClipboardEvent) => void>(),
  onComplete: defineListenerProp<(value: string) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: string) => void>(),
  ...pickProps(fieldDecoratorProps, ['variant', 'textColor', 'focusColor', 'blurColor']),
}
