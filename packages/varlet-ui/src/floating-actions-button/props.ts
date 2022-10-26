import type { PropType } from 'vue'

export type Trigger = 'click' | 'hover'

export type FabLocation = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

export type ActionsLocation = 'top' | 'bottom' | 'left' | 'right'

export type Action = {
  icon?: string
  iconColor?: string
  iconSize?: string | number
  iconNamespace?: string
  buttonColor?: string
  buttonSize?: string | number
}

export const props = {
  // 是否显示面板
  show: {
    type: Boolean,
    default: false,
  },
  'onUpdate:show': {
    type: Function as PropType<(show: boolean) => void>,
  },
  // 是否禁用 fab
  disabled: {
    type: Boolean,
    default: false,
  },
  // 菜单触发方式
  trigger: {
    type: String as PropType<Trigger>,
    default: 'click',
  },
  // fab 定位
  fabLocation: {
    type: String as PropType<FabLocation>,
    default: 'bottom-right',
  },
  // fab 颜色
  fabColor: {
    type: String,
    default: '#3a7afe',
  },
  // fab 尺寸
  fabIconSize: {
    type: String,
    default: '',
  },
  // actions 定位
  actionsLocation: {
    type: String as PropType<ActionsLocation>,
    default: 'top',
  },
  actions: {
    type: Array as PropType<Array<Action>>,
    default: [],
  },
  inactiveIcon: {
    type: String,
    default: 'plus',
  },
  activeIcon: {
    type: String,
    default: 'window-close',
  },
  overlay: {
    type: Boolean,
    default: false,
  },
  overlayClass: {
    type: String,
    default: '',
  },
  overlayStyle: {
    type: Object as PropType<Record<string, unknown>>,
    default: {},
  },
}
