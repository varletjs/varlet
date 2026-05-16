import { useChildren } from '@varlet/use'
import { type ComputedRef } from 'vue'
import type { SegmentedButtonProvider } from '../segmented-button/provide'
import type { SegmentedButtonsSize } from './props'

export interface SegmentedButtonsProvider {
  multiple: ComputedRef<boolean>
  checkmark: ComputedRef<boolean>
  size: ComputedRef<SegmentedButtonsSize>
  onClick(value: any, checked: boolean): void
}

export const SEGMENTED_BUTTONS_BIND_BUTTON_KEY = Symbol('SEGMENTED_BUTTONS_BIND_BUTTON_KEY')

export function useSegmentedButtons() {
  const { bindChildren, childProviders, length } = useChildren<SegmentedButtonsProvider, SegmentedButtonProvider>(
    SEGMENTED_BUTTONS_BIND_BUTTON_KEY,
  )

  return {
    length,
    buttons: childProviders,
    bindButtons: bindChildren,
  }
}
