import { VNode, VNodeChild, type PropType } from 'vue'
import { menuProps } from '../menu'
import { defineListenerProp, pickProps } from '../utils/components'

export type MenuSelectSize = 'normal' | 'mini' | 'small' | 'large'

export type MenuSelectOptionLabelRender = (option: MenuSelectOption, checked: boolean) => VNodeChild

export type MenuSelectOptionLabel = string | VNode | MenuSelectOptionLabelRender

export interface MenuSelectOption {
  label?: MenuSelectOptionLabel
  value?: any
  children?: MenuSelectOption[]
  disabled?: boolean
  ripple?: boolean
  [key: PropertyKey]: any

  _parent?: MenuSelectOption
  _children?: MenuSelectOption[]
  _rawOption?: MenuSelectOption
}

export const props = {
  modelValue: {
    type: [String, Number, Boolean, Array] as PropType<any>,
    default: undefined,
  },
  options: {
    type: Array as PropType<MenuSelectOption[]>,
    default: () => [],
  },
  labelKey: {
    type: String,
    default: 'label',
  },
  valueKey: {
    type: String,
    default: 'value',
  },
  childrenKey: {
    type: String,
    default: 'children',
  },
  size: {
    type: String as PropType<MenuSelectSize>,
    default: 'normal',
  },
  multiple: Boolean,
  scrollable: Boolean,
  closeOnSelect: {
    type: Boolean,
    default: true,
  },
  'onUpdate:modelValue': defineListenerProp<(value: any) => void>(),
  onSelect: defineListenerProp<(value: any, option: MenuSelectOption) => void>(),
  ...pickProps(menuProps, [
    'show',
    'disabled',
    'trigger',
    'reference',
    'placement',
    'strategy',
    'offsetX',
    'offsetY',
    'teleport',
    'sameWidth',
    'elevation',
    'popoverClass',
    'closeOnClickReference',
    'onOpen',
    'onOpened',
    'onClose',
    'onClosed',
    'onClickOutside',
    'onUpdate:show',
  ]),

  // internal start
  onKeyEscape: defineListenerProp<() => void>(),
  // internal end
}
