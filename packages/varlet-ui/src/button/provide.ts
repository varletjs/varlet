import { ComputedRef } from 'vue'
import { useAtParentIndex, useParent } from '../utils/components'
import {
  BUTTON_GROUP_BIND_BUTTON_KEY,
  BUTTON_GROUP_COUNT_BUTTON_KEY,
  ButtonGroupProvider,
} from '../button-group/provide'

export interface ButtonProvider {
  elevation?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
  type?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
  size?: 'normal' | 'mini' | 'small' | 'large'
  color?: string
  mode?: 'text' | 'outline'
  element: ComputedRef<HTMLElement | null>
}

export function useButtonGroup() {
  const { bindParent, parentProvider } = useParent<ButtonGroupProvider, ButtonProvider>(BUTTON_GROUP_BIND_BUTTON_KEY)
  const { index } = useAtParentIndex(BUTTON_GROUP_COUNT_BUTTON_KEY)

  return {
    index,
    buttonGroup: parentProvider,
    bindButtonGroup: bindParent,
  }
}
