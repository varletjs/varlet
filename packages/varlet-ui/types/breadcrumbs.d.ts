import { VNode } from 'vue'
import { BasicAttributes, SetPropsDefaults, VarComponent } from './varComponent'

export declare const breadcrumbsProps: Record<keyof BreadcrumbsProps, any>

export interface BreadcrumbsProps extends BasicAttributes {
  separator?: string
}

export class Breadcrumbs extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<BreadcrumbsProps>

  $props: BreadcrumbsProps

  $slots: {
    default(): VNode[]
  }
}

export class _BreadcrumbsComponent extends Breadcrumbs {}
