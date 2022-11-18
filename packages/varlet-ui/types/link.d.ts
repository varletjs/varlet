import { VarComponent, BasicAttributes, Type as LinkType } from './varComponent'
import { VNode } from 'vue'

export type LinkUnderline = 'always' | 'hover' | 'none'

export { LinkType }

export interface LinkProps extends BasicAttributes {
  type?: LinkType
  href?: string
  target?: string
  to?: string | Record<string, any>
  replace?: boolean
  underline?: LinkUnderline
  disabled?: boolean
  textColor?: string
  textSize?: string | number
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
