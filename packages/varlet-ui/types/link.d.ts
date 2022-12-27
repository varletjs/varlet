import { VarComponent, BasicAttributes, Type as LinkType, ListenerProp } from './varComponent'
import { VNode } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export type LinkUnderline = 'always' | 'hover' | 'none'

export { LinkType }

export interface LinkProps extends BasicAttributes {
  type?: LinkType
  href?: string
  target?: string
  to?: RouteLocationRaw
  replace?: boolean
  underline?: LinkUnderline
  disabled?: boolean
  textColor?: string
  textSize?: string | number
  onClick?: ListenerProp<(e: Event) => void>
}

export class Link extends VarComponent {
  $props: LinkProps

  $slots: {
    default(): VNode[]
  }
}

export class _LinkComponent extends Link {}
