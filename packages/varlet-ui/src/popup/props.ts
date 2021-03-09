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
    type: Function,
  },
  onClose: {
    type: Function,
  },
  onOpened: {
    type: Function,
  },
  onClosed: {
    type: Function,
  },
  onClickOverlay: {
    type: Function,
  },
  onRouteChange: {
    type: Function,
  },
  'onUpdate:show': {
    type: Function,
  },
}
