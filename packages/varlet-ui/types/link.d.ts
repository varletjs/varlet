import { VarComponent, BasicAttributes, Type as LinkType, Underline } from './varComponent'
import { VNode } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export { LinkType, Underline }

export interface LinkProps extends BasicAttributes {
  type?: LinkType
  href?: string
  target?: string
  to?: RouteLocationRaw
  replace?: boolean
  underline?: Underline
  disabled?: boolean
  textColor?: string
  defaultStyle?: boolean
  onClick?: (e: Event) => void
}

export class Link extends VarComponent {
  $props: LinkProps

  $slots: {
    default(): VNode[]
  }
}

export class _LinkComponent extends Link {}
