import { PropType } from 'vue'

export const props = {
  show: {
    type: Boolean,
    default: false,
  },
  overlayClass: {
    type: String,
  },
  overlayStyle: {
    type: Object,
  },
  onClickOverlay: {
    type: Function as PropType<() => void>,
  },
  'onUpdate:show': {
    type: Function as PropType<(show: boolean) => void>,
  },
}
