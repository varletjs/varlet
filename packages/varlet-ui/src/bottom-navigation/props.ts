import type { PropType } from 'vue'
import type { ButtonProps } from '../../types'
import { defineListenerProp } from '../utils/components'

export const props = {
  active: {
    type: [Number, String] as PropType<number | string>,
    default: 0,
  },
  fixed: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: false,
  },
  safeArea: {
    type: Boolean,
    default: false,
  },
  zIndex: {
    type: [Number, String] as PropType<number | string>,
    default: 1,
  },
  activeColor: {
    type: String,
  },
  inactiveColor: {
    type: String,
  },
  onChange: defineListenerProp<(active: number | string) => void>(),
  'onUpdate:active': defineListenerProp<(active: string | number) => void>(),
  onBeforeChange: defineListenerProp<(active: number | string) => boolean | Promise<any>>(),
  onFabClick: defineListenerProp<() => void>(),
  fabProps: {
    type: Object as PropType<Partial<ButtonProps>>,
  },
}
