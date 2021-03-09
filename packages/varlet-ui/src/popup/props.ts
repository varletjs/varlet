import { PropType } from 'vue'

function positionValidator(position: string): boolean {
  return ['top', 'bottom', 'right', 'left', 'center'].includes(position)
}

export const props = {
  show: {
    type: Boolean,
    default: false,
  },
  position: {
    type: String,
    default: 'center',
    validator: positionValidator,
  },
  overlay: {
    type: Boolean,
    default: true,
  },
  overlayClass: {
    type: String,
  },
  overlayStyle: {
    type: Object,
  },
  lockScroll: {
    type: Boolean,
    default: true,
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true,
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
  onClickOverlay: {
    type: Function as PropType<() => void>,
  },
  onRouteChange: {
    type: Function as PropType<() => void>,
  },
  'onUpdate:show': {
    type: Function as PropType<(show: boolean) => void>,
  },
}
