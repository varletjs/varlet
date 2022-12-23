import type { PropType } from 'vue'

function scrollToErrorValidator(status: string): boolean {
  return ['start', 'end', 'none'].includes(status)
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
    type: String as PropType<'start' | 'end' | 'none'>,
    default: 'none',
    validator: scrollToErrorValidator,
  },
}
