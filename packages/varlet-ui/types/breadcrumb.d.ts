import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'
import { VNode } from 'vue'

export interface BreadcrumbProps extends BasicAttributes {
  separator?: string
  onClick?: ListenerProp<(e: Event) => void>
}

export class Breadcrumb extends VarComponent {
  $props: BreadcrumbProps

  $slots: {
    default(): VNode[]
    separator(): VNode[]
  }
}

export class _BreadcrumbComponent extends Breadcrumb {}
