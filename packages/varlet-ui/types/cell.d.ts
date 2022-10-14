import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export interface CellProps extends BasicAttributes {
  title?: string | number
  icon?: string
  description?: string
  border?: boolean
  iconClass?: string
  titleClass?: string
  descriptionClass?: string
  extraClass?: string
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
