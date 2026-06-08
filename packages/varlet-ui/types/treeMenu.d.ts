import { VNode, VNodeChild } from 'vue'
import { BasicAttributes, ListenerProp, SetPropsDefaults, VarComponent } from './varComponent'

export declare const treeMenuProps: Record<keyof TreeMenuProps, any>

export type TreeMenuValue = string | number

export type TreeMenuOptionLabelRender = (option: TreeMenuOption, active: boolean) => VNodeChild

export type TreeMenuOptionIconRender = (option: TreeMenuOption, active: boolean) => VNodeChild

export interface TreeMenuOption {
  value?: TreeMenuValue
  label?: string | VNode | TreeMenuOptionLabelRender
  icon?: string | VNode | TreeMenuOptionIconRender
  namespace?: string
  disabled?: boolean
  children?: TreeMenuOption[]

  [key: PropertyKey]: any
}

export interface TreeMenuProps extends BasicAttributes {
  active?: TreeMenuValue
  options?: TreeMenuOption[]
  expandedValues?: TreeMenuValue[]
  valueKey?: string
  labelKey?: string
  iconKey?: string
  childrenKey?: string
  accordion?: boolean
  indent?: string | number
  ripple?: boolean
  disabled?: boolean
  onChange?: ListenerProp<(active: TreeMenuValue, option: TreeMenuOption) => void>
  onExpand?: ListenerProp<(values: TreeMenuValue[]) => void>
  'onUpdate:active'?: ListenerProp<(active: TreeMenuValue) => void>
  'onUpdate:expandedValues'?: ListenerProp<(values: TreeMenuValue[]) => void>
}

export class TreeMenu extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<TreeMenuProps>

  $props: TreeMenuProps
}

export class _TreeMenuComponent extends TreeMenu {}
