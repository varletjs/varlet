import { PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

type Type = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
type FabPosition = 'left-top' | 'right-top' | 'left-bottom' | 'right-bottom'
type FabTrigger = 'click' | 'hover'
type FabDirection = 'top' | 'right' | 'bottom' | 'left'

export const props = {
  modelValue: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
  },
  textColor: {
    type: String,
  },
  icon: {
    type: String,
    default: 'plus',
  },
  iconSize: {
    type: [Number, String],
    default: '24px',
  },
  type: {
    type: String as PropType<Type>,
    default: 'primary',
    validator: (type: string): boolean => {
      return ['default', 'primary', 'info', 'success', 'warning', 'danger'].includes(type)
    },
  },
  direction: {
    type: String as PropType<FabDirection>,
    default: 'top',
    validator: (val: string): boolean => {
      return ['top', 'right', 'bottom', 'left'].includes(val)
    },
  },
  position: {
    type: String as PropType<FabPosition>,
    default: 'right-bottom',
    validator: (val: string): boolean => {
      return ['left-top', 'right-top', 'left-bottom', 'right-bottom'].includes(val)
    },
  },
  trigger: {
    type: String as PropType<FabTrigger>,
    default: 'click',
    validator: (val: string): boolean => {
      return ['click', 'hover'].includes(val)
    },
  },
  'onUpdate:modelValue': defineListenerProp<(value: boolean) => void>(),
}
