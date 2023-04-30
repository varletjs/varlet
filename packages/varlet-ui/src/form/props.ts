import type { PropType } from 'vue'

function scrollToErrorValidator(status: string): boolean {
  return ['start', 'end'].includes(status)
}

export const props = {
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  scrollToError: {
    type: String as PropType<'start' | 'end'>,
    validator: scrollToErrorValidator,
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0,
  },
}
