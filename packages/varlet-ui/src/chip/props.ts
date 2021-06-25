import type { PropType } from 'vue'
import { pickProps } from '../utils/components'
import { props as iconProps } from '../icon/props'

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
  color: {
    type: String,
  },
  textColor: {
    type: String,
  },
  iconName: pickProps(iconProps, 'name'),
  plain: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: true,
  },
  block: {
    type: Boolean,
    default: false,
  },
  closable: {
    type: Boolean,
    default: false,
  },
  onClose: {
    type: Function as PropType<(e: Event) => void>,
  },
}
