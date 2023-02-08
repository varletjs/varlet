import type { ComputedRef } from 'vue'
import { useAtChildrenCounter, useChildren } from '../utils/components'
import { ButtonProvider } from '../button/provide'

export interface ButtonGroupProvider {
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
  color?: ComputedRef<string>
  mode?: ComputedRef<'text' | 'outline'>
  vertical?: ComputedRef<boolean>
}

export const BUTTON_GROUP_BIND_BUTTON_KEY = Symbol('BUTTON_GROUP_BIND_BUTTON_KEY')
export const BUTTON_GROUP_COUNT_BUTTON_KEY = Symbol('BUTTON_GROUP_COUNT_BUTTON_KEY')

export function useButtons() {
  const { bindChildren, childProviders } = useChildren<ButtonGroupProvider, ButtonProvider>(
    BUTTON_GROUP_BIND_BUTTON_KEY
  )
  const { length } = useAtChildrenCounter(BUTTON_GROUP_COUNT_BUTTON_KEY)

  return {
    length,
    buttons: childProviders,
    bindButtons: bindChildren,
  }
}
