import { assert } from '@varlet/shared'
import { useParent } from '@varlet/use'
import { type ComputedRef } from 'vue'
import { SEGMENTED_BUTTONS_BIND_BUTTON_KEY, type SegmentedButtonsProvider } from '../segmented-buttons/provide'

export interface SegmentedButtonProvider {
  checked: ComputedRef<boolean>
  disabled: ComputedRef<boolean>
  isFocusing: ComputedRef<boolean>
  sync(value: any): boolean
  toggle(): void
  move(selectWhenFocused: boolean): void
}

export function useSegmentedButtons() {
  const { bindParent, parentProvider } = useParent<SegmentedButtonsProvider, SegmentedButtonProvider>(
    SEGMENTED_BUTTONS_BIND_BUTTON_KEY,
  )

  assert(!!bindParent, 'SegmentedButton', '<var-segmented-button/> must in <var-segmented-buttons/>')

  return {
    segmentedButtons: parentProvider!,
    bindSegmentedButtons: bindParent!,
  }
}
