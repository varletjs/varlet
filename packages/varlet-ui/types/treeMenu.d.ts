import { VNode, VNodeChild } from 'vue'
import { BasicAttributes, ListenerProp, SetPropsDefaults, VarComponent } from './varComponent'

export declare const treeMenuProps: Record<keyof TreeMenuProps, any>

export type TreeMenuValue = string | number

export type TreeMenuOptionType = 'group' | 'divider'

export type TreeMenuOptionLabelRender = (option: TreeMenuOption, active: boolean) => VNodeChild

export type TreeMenuOptionIconRender = (option: TreeMenuOption, active: boolean) => VNodeChild

export interface TreeMenuBaseOption {
  value?: TreeMenuValue
  label?: string | VNode | TreeMenuOptionLabelRender
  icon?: string | VNode | TreeMenuOptionIconRender
  namespace?: string
  disabled?: boolean
  children?: TreeMenuOption[]

  [key: PropertyKey]: any
}

export interface TreeMenuItemOption extends TreeMenuBaseOption {
  type?: undefined
}

export interface TreeMenuGroupOption extends TreeMenuBaseOption {
  type: 'group'
  value: TreeMenuValue
}

export interface TreeMenuDividerOption extends TreeMenuBaseOption {
  type: 'divider'
}

export type TreeMenuOption = TreeMenuItemOption | TreeMenuGroupOption | TreeMenuDividerOption

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
  'onUpdate:active'?: ListenerProp<(active: TreeMenuValue) => void>
  'onUpdate:expandedValues'?: ListenerProp<(values: TreeMenuValue[]) => void>
}

export class TreeMenu extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<TreeMenuProps>

  $props: TreeMenuProps

  $slots: {
    start(): VNode[]
    default(): VNode[]
    end(): VNode[]
  }
}

export class _TreeMenuComponent extends TreeMenu {}
