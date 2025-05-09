import { VNode } from 'vue'
import { BasicAttributes, SetPropsDefaults, VarComponent } from './varComponent'

export declare const collapseItemProps: Record<keyof CollapseItemProps, any>

export interface CollapseItemProps extends BasicAttributes {
  name?: string | number
  title?: string
  icon?: string
  disabled?: boolean
}

export class CollapseItem extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<CollapseItemProps>

  $props: CollapseItemProps

  $slots: {
    default(): VNode[]
    title(): VNode[]
    icon(): VNode[]
  }
}

export class _CollapseItemComponent extends CollapseItem {}
