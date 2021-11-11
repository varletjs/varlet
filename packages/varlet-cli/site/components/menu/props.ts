import type { PropType } from 'vue'

function alignmentValidator(alignment: string) {
  return ['top', 'bottom'].includes(alignment)
}

export const props = {
  show: {
    type: Boolean,
    default: false,
  },
  alignment: {
    type: String as PropType<'top' | 'bottom'>,
    default: 'top',
    validator: alignmentValidator,
  },
  offsetX: {
    type: [Number, String],
    default: 0,
  },
  offsetY: {
    type: [Number, String],
    default: 0,
  },
  teleport: {
    default: 'body',
  },
  onOpen: {
    type: Function as PropType<() => void>,
  },
  onOpened: {
    type: Function as PropType<() => void>,
  },
  onClose: {
    type: Function as PropType<() => void>,
  },
  onClosed: {
    type: Function as PropType<() => void>,
  },
  'onUpdate:show': {
    type: Function as PropType<(show: boolean) => void>,
  },
}
