import type { PropType } from 'vue'
import type { ButtonProps } from '../../types'

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
  onChange: {
    type: Function as PropType<(active: number | string) => void>,
  },
  'onUpdate:active': {
    type: Function as PropType<(active: string | number) => void>,
  },
  onBeforeChange: {
    type: Function as PropType<(active: number | string) => boolean | Promise<any>>,
  },
  onFabClick: {
    type: Function as PropType<() => void>,
  },
  fabProps: {
    type: [Object] as PropType<Partial<ButtonProps>>,
    default: {},
  },
}
