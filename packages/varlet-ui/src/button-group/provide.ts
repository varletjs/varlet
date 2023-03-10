import { useChildren } from '@varlet/use'
import type { ComputedRef } from 'vue'

export interface ButtonGroupProvider {
  elevation: ComputedRef<string | number>
  type: ComputedRef<'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'>
  size: ComputedRef<'normal' | 'mini' | 'small' | 'large'>
  color: ComputedRef<string | undefined>
  textColor: ComputedRef<string | undefined>
  mode: ComputedRef<'text' | 'outline' | 'normal'>
}

export const BUTTON_GROUP_BIND_BUTTON_KEY = Symbol('BUTTON_GROUP_BIND_BUTTON_KEY')

export function useButtons() {
  const { bindChildren, childProviders, length } = useChildren<ButtonGroupProvider, null>(BUTTON_GROUP_BIND_BUTTON_KEY)

  return {
    length,
    buttons: childProviders,
    bindButtons: bindChildren,
  }
}
