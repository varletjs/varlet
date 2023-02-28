import { Component, PropType, TransitionProps } from 'vue'

// Composables
export const positionProps = {
  fixed: {
    type: Boolean,
    default: false,
  },
  absolute: {
    type: Boolean,
    default: false,
  },
  left: {
    type: Boolean,
    default: false,
  },
  right: {
    type: Boolean,
    default: false,
  },
  top: {
    type: Boolean,
    default: false,
  },
  bottom: {
    type: Boolean,
    default: false,
  },
}

export const transitionProps = {
  transition: {
    type: [Boolean, String, Object] as PropType<
      string | boolean | (TransitionProps & { component?: Component }) | undefined
    >,
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
    type: String as PropType<'top' | 'right' | 'bottom' | 'left'>,
    default: 'bottom',
    validator: (val: string) => {
      return ['top', 'right', 'bottom', 'left'].includes(val)
    },
  },
  trigger: {
    type: String as PropType<'click' | 'hover'>,
    default: 'click',
  },
}
