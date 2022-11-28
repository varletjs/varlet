import { PropType, TeleportProps } from 'vue'

export const props = {
  show: {
    type: Boolean,
    default: false,
  },
  class: {
    type: String,
  },
  style: {
    type: Object,
  },
  onClickOverlay: {
    type: Function as PropType<() => void>,
  },
  teleport: {
    type: String as PropType<TeleportProps['to']>,
  },
  'onUpdate:show': {
    type: Function as PropType<(show: boolean) => void>,
  },
}
