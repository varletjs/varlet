import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'
import { VNode } from 'vue'

export declare const cellProps: Record<string, any>

export interface CellProps extends BasicAttributes {
  title?: string | number
  icon?: string
  description?: string
  border?: boolean
  borderOffset?: number | string
  iconClass?: string
  titleClass?: string
  descriptionClass?: string
  extraClass?: string
  ripple?: boolean
  onClick?: ListenerProp<(e: Event) => void>
}

export class Cell extends VarComponent {
  $props: CellProps

  $slots: {
    default(): VNode[]
    icon(): VNode[]
    description(): VNode[]
    extra(): VNode[]
  }
}

export class _CellComponent extends Cell {}
