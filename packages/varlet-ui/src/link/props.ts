import { type PropType } from 'vue'
import { type RouteLocationRaw } from 'vue-router'
import { defineListenerProp } from '../utils/components'

export type LinkType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'

export type LinkUnderline = 'always' | 'hover' | 'none'

export const props = {
  type: {
    type: String as PropType<LinkType>,
    default: 'default',
  },
  href: String,
  target: String,
  rel: String,
  to: [String, Object] as PropType<RouteLocationRaw>,
  replace: Boolean,
  underline: {
    type: String as PropType<LinkUnderline>,
    default: 'always',
  },
  disabled: Boolean,
  textSize: [String, Number],
  textColor: String,
  onClick: defineListenerProp<(e: Event) => void>(),
}
