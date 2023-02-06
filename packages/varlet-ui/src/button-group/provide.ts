import type { ComputedRef } from 'vue'
import { useAtChildrenCounter, useChildren } from '../utils/components'
import { ButtonProvider } from '../button/provide'

export interface ButtonGroupProvider {
  boxShadow: ComputedRef<boolean>
  type: ComputedRef<'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'>
  size: ComputedRef<'normal' | 'mini' | 'small' | 'large'>
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
