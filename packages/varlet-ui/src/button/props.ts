import { props as loadingProps } from '../loading/props'
import { pickProps } from '../utils/components'
import { PropType } from 'vue'

function typeValidator(type: string): boolean {
  return ['default', 'primary', 'info', 'success', 'warning', 'danger'].includes(type)
}

function sizeValidator(size: string): boolean {
  return ['normal', 'mini', 'small', 'large'].includes(size)
}

export const props = {
  type: {
    type: String,
    default: 'default',
    validator: typeValidator,
  },
  size: {
    type: String,
    default: 'normal',
    validator: sizeValidator,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  text: {
    type: Boolean,
    default: false,
  },
  outline: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  ripple: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
  },
  textColor: {
    type: String,
  },
  loadingRadius: {
    type: [Number, String],
    default: 12,
  },
  loadingType: pickProps(loadingProps, 'type'),
  loadingSize: pickProps(loadingProps, 'size'),
  onClick: {
    type: Function as PropType<(e: Event) => void>,
  },
  onTouchstart: {
    type: Function as PropType<(e: Event) => void>,
  },
}
