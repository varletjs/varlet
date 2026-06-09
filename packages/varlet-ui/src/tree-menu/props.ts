import { VNode, VNodeChild, type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

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

export interface TreeMenuNormalizedOption {
  option: TreeMenuOption
  type?: TreeMenuOptionType
  value: TreeMenuValue
  label?: TreeMenuOption['label']
  icon?: TreeMenuOption['icon']
  active: boolean
  activePath: boolean
  disabled: boolean
  expanded: boolean
  hasChildren: boolean
  children: TreeMenuNormalizedOption[]
  parent?: TreeMenuNormalizedOption
  level: number
}

export const props = {
  active: [Number, String] as PropType<TreeMenuValue>,
  options: {
    type: Array as PropType<TreeMenuOption[]>,
    default: () => [],
  },
  expandedValues: Array as PropType<TreeMenuValue[]>,
  valueKey: {
    type: String,
    default: 'value',
  },
  labelKey: {
    type: String,
    default: 'label',
  },
  iconKey: {
    type: String,
    default: 'icon',
  },
  childrenKey: {
    type: String,
    default: 'children',
  },
  accordion: Boolean,
  indent: {
    type: [String, Number],
  },
  ripple: {
    type: Boolean,
    default: false,
  },
  disabled: Boolean,
  onChange: defineListenerProp<(active: TreeMenuValue, option: TreeMenuOption) => void>(),
  'onUpdate:active': defineListenerProp<(active: TreeMenuValue) => void>(),
  'onUpdate:expandedValues': defineListenerProp<(values: TreeMenuValue[]) => void>(),
}
