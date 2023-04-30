import { Validation } from '../form/provide'
import { useChildren } from '@varlet/use'
import { RadioProvider } from '../radio/provide'
import { type ComputedRef } from 'vue'

export interface RadioGroupProvider extends Validation {
  errorMessage: ComputedRef<string>
  onToggle(value: any): void
}

export const RADIO_GROUP_BIND_RADIO_KEY = Symbol('RADIO_GROUP_BIND_RADIO_KEY')

export function useRadios() {
  const { bindChildren, childProviders, length } = useChildren<RadioGroupProvider, RadioProvider>(
    RADIO_GROUP_BIND_RADIO_KEY
  )

  return {
    length,
    radios: childProviders,
    bindRadios: bindChildren,
  }
}
