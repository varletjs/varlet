import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export interface BreadcrumbsProps extends BasicAttributes {
  separator?: string
}

export class Breadcrumbs extends VarComponent {
  $props: BreadcrumbsProps

  $slots: {
    default(): VNode[]
  }
}

export class _BreadcrumbsComponent extends Breadcrumbs {}
