import { Component, PropType, TransitionProps } from 'vue'

export type Transition = string | boolean | (TransitionProps & { component?: Component }) | undefined
export type Position = 'left-top' | 'right-top' | 'left-bottom' | 'right-bottom'
export type Trigger = 'click' | 'hover'
export type Direction = 'top' | 'right' | 'bottom' | 'left'

// Composables
export const positionProps = {
  position: {
    type: String as PropType<Position>,
    default: 'right-bottom',
    validator: (val: string) => {
      return ['left-top', 'right-top', 'left-bottom', 'right-bottom'].includes(val)
    },
  },
}

export const transitionProps = {
  transition: {
    type: [Boolean, String, Object] as PropType<Transition>,
    default: 'slide-y-reverse-transition',
    validator: (val: boolean) => val !== true,
  },
}

export const props = {
  ...positionProps,
  ...transitionProps,
  modelValue: {
    type: Boolean,
    default: false,
  },
  direction: {
    type: String as PropType<Direction>,
    default: 'top',
    validator: (val: string) => {
      return ['top', 'right', 'bottom', 'left'].includes(val)
    },
  },
  trigger: {
    type: String as PropType<Trigger>,
    default: 'click',
    validator: (val: string) => {
      return ['click', 'hover'].includes(val)
    },
  },
}
