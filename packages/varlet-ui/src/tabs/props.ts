import { defineListenerProp, pickProps } from '../utils/components'
import { props as stickyProps } from '../sticky/props'
import type { PropType } from 'vue'

function directionValidator(direction: string) {
  return ['horizontal', 'vertical'].includes(direction)
}

function scrollableValidator(scrollable: string) {
  return ['auto', 'always'].includes(scrollable)
}

function positionValidator(pos: string) {
  return ['normal', 'reverse'].includes(pos)
}

export const props = {
  active: {
    type: [String, Number],
    default: 0,
  },
  layoutDirection: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
    validator: directionValidator,
  },
  itemDirection: {
    type: String as PropType<'horizontal' | 'vertical'>,
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
  stickyCssMode: pickProps(stickyProps, 'cssMode'),
  stickyZIndex: pickProps(stickyProps, 'zIndex'),
  offsetTop: pickProps(stickyProps, 'offsetTop'),
  safeArea: {
    type: Boolean,
    default: false,
  },
  scrollable: {
    type: String as PropType<'auto' | 'always'>,
    default: 'auto',
    validator: scrollableValidator,
  },
  indicatorPosition: {
    type: String as PropType<'normal' | 'reverse'>,
    default: 'normal',
    validator: positionValidator,
  },
  onClick: defineListenerProp<(active: string | number) => void>(),
  onChange: defineListenerProp<(active: string | number) => void>(),
  'onUpdate:active': defineListenerProp<(active: string | number) => void>(),
}
