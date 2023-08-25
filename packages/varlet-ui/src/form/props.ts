import { type PropType } from 'vue'

export type FormScrollToError = 'start' | 'end'

export const props = {
  disabled: Boolean,
  readonly: Boolean,
  scrollToError: String as PropType<FormScrollToError>,
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0,
  },
}
