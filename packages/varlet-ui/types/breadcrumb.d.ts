import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'
import { VNode } from 'vue'

export declare const breadcrumbProps: Record<keyof BreadcrumbProps, any>

export interface BreadcrumbProps extends BasicAttributes {
  separator?: string
  onClick?: ListenerProp<(e: Event) => void>
}

export class Breadcrumb extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<BreadcrumbProps>

  $props: BreadcrumbProps

  $slots: {
    default(): VNode[]
    separator(): VNode[]
  }
}

export class _BreadcrumbComponent extends Breadcrumb {}
