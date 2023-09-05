import { type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type FormScrollToError = 'start' | 'end'

export const props = {
  disabled: Boolean,
  readonly: Boolean,
  scrollToError: String as PropType<FormScrollToError>,
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0,
  },
  onSubmit: defineListenerProp<(valid: boolean) => void>(),
  onReset: defineListenerProp<() => void>(),
}
