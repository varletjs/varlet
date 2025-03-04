import { type ComputedRef } from 'vue'
import { useParent } from '@varlet/use'
import { Validation } from '../form/provide'
import { RADIO_GROUP_BIND_RADIO_KEY, RadioGroupProvider } from '../radio-group/provide'

export interface RadioProvider extends Validation {
  isFocusing: ComputedRef<boolean>
  sync(value: any): boolean
  move(): void
  moveable(): boolean
}

export function useRadioGroup() {
  const { bindParent, parentProvider, index } = useParent<RadioGroupProvider, RadioProvider>(RADIO_GROUP_BIND_RADIO_KEY)

  return {
    index,
    radioGroup: parentProvider,
    bindRadioGroup: bindParent,
  }
}
