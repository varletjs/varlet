import { type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type FieldDecoratorSize = 'small' | 'normal'

export type FieldDecoratorVariant = 'outlined' | 'standard'

export const props = {
  value: {
    type: null,
    required: true,
  },
  id: {
    type: String,
    default: '',
  },
  isFocus: Boolean,
  size: {
    type: String as PropType<FieldDecoratorSize>,
    default: 'normal',
  },
  variant: {
    type: String as PropType<FieldDecoratorVariant>,
    default: 'standard',
  },
  placeholder: String,
  line: {
    type: Boolean,
    default: true,
  },
  hint: {
    type: Boolean,
    default: true,
  },
  hintCenter: {
    type: Boolean,
    default: true,
  },
  textColor: String,
  focusColor: String,
  blurColor: String,
  errorMessage: String,
  formDisabled: Boolean,
  disabled: Boolean,
  clearable: Boolean,
  cursor: String,
  composing: Boolean,
  onClick: defineListenerProp<(e: Event) => void>(),
  onClear: defineListenerProp<(value: Event) => void>(),
}
