import { VNode, VNodeChild } from 'vue'
import { BasicAttributes, ListenerProp, SetPropsDefaults, VarComponent } from './varComponent'

export declare const treeMenuProps: Record<keyof TreeMenuProps, any>

export type TreeMenuOptionValue = string | number

export type TreeMenuOptionType = 'group' | 'divider'

export type TreeMenuOptionLabelRender = (option: TreeMenuOption, active: boolean) => VNodeChild

export type TreeMenuOptionIconRender = (option: TreeMenuOption, active: boolean) => VNodeChild

export interface TreeMenuOptionRenderContext {
  node: VNode
}

export type TreeMenuOptionRender = (
  context: TreeMenuOptionRenderContext,
  option: TreeMenuOption,
  active: boolean,
) => VNodeChild

export interface TreeMenuBaseOption {
  value?: TreeMenuOptionValue
  label?: string | VNode | TreeMenuOptionLabelRender
  icon?: string | VNode | TreeMenuOptionIconRender
  render?: TreeMenuOptionRender
  namespace?: string
  show?: boolean
  disabled?: boolean
  children?: TreeMenuOption[]

  [key: PropertyKey]: any
}

export interface TreeMenuItemOption extends TreeMenuBaseOption {
  type?: undefined
}

export interface TreeMenuGroupOption extends TreeMenuBaseOption {
  type: 'group'
}

export interface TreeMenuDividerOption extends TreeMenuBaseOption {
  type: 'divider'
}

export type TreeMenuOption = TreeMenuItemOption | TreeMenuGroupOption | TreeMenuDividerOption

export interface TreeMenuProps extends BasicAttributes {
  active?: TreeMenuOptionValue
  options?: TreeMenuOption[]
  expandedValues?: TreeMenuOptionValue[]
  valueKey?: string
  labelKey?: string
  iconKey?: string
  childrenKey?: string
  accordion?: boolean
  indent?: string | number
  ripple?: boolean
  bordered?: boolean
  disabled?: boolean
  onChange?: ListenerProp<(active: TreeMenuOptionValue, option: TreeMenuOption) => void>
  'onUpdate:active'?: ListenerProp<(active: TreeMenuOptionValue) => void>
  'onUpdate:expandedValues'?: ListenerProp<(values: TreeMenuOptionValue[]) => void>
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
