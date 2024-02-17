import { type PropType } from 'vue'
import { menuProps } from '../menu'
import { defineListenerProp, pickProps } from '../utils/components'

export type MenuSelectSize = 'normal' | 'mini' | 'small' | 'large'

export const props = {
  modelValue: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: undefined,
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
}
