import { pickProps } from '../utils/components'
import { props as stickyProps } from '../sticky/props'
import { PropType } from 'vue'

function directionValidator(direction: string) {
  return ['horizontal', 'vertical'].includes(direction)
}

export const props = {
  active: {
    type: [String, Number],
    default: 0,
  },
  layoutDirection: {
    type: String,
    default: 'horizontal',
    validator: directionValidator,
  },
  itemDirection: {
    type: String,
    default: 'horizontal',
    validator: directionValidator,
  },
  fixedBottom: {
    type: Boolean,
    default: false,
  },
  activeColor: {
    type: String,
  },
  inactiveColor: {
    type: String,
  },
  disabledColor: {
    type: String,
  },
  color: {
    type: String,
  },
  indicatorColor: {
    type: String,
  },
  indicatorSize: {
    type: [String, Number],
  },
  elevation: {
    type: Boolean,
    default: false,
  },
  sticky: {
    type: Boolean,
    default: false,
  },
  offsetTop: pickProps(stickyProps, 'offsetTop'),
  onClick: {
    type: Function as PropType<(active: string | number) => void>,
  },
  onChange: {
    type: Function as PropType<(active: string | number) => void>,
  },
  'onUpdate:active': {
    type: Function as PropType<(active: string | number) => void>,
  },
}
