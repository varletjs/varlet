import { buttonProps } from '../button'
import type { PropType } from 'vue'
import { type ExtractPublicPropTypes, defineListenerProp } from '../utils/components'

export const props = {
  active: {
    type: [Number, String] as PropType<number | string>,
    default: 0,
  },
  zIndex: {
    type: [Number, String] as PropType<number | string>,
    default: 1,
  },
  fixed: Boolean,
  border: Boolean,
  safeArea: Boolean,
  activeColor: String,
  inactiveColor: String,
  fabProps: Object as PropType<ExtractPublicPropTypes<typeof buttonProps>>,
  onChange: defineListenerProp<(active: number | string) => void>(),
  onBeforeChange: defineListenerProp<(active: number | string) => any | Promise<any>>(),
  onFabClick: defineListenerProp<() => void>(),
  'onUpdate:active': defineListenerProp<(active: string | number) => void>(),
}
