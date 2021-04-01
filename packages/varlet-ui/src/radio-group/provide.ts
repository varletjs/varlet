import { ComputedRef } from 'vue'
import { Validation } from '../form/provide'
import { useAtChildrenCounter, useChildren } from '../utils/components'
import { RadioProvider } from '../radio/provide'

export interface RadioGroupProvider extends Validation {
  onToggle(value: any): void
  errorMessage: ComputedRef<string>
}

export const RADIO_GROUP_BIND_RADIO_KEY = Symbol('RADIO_GROUP_BIND_RADIO_KEY')
export const RADIO_GROUP_COUNT_RADIO_KEY = Symbol('RADIO_GROUP_COUNT_RADIO_KEY')

export function useRadios() {
  const { bindChildren, childProviders } = useChildren<RadioGroupProvider, RadioProvider>(RADIO_GROUP_BIND_RADIO_KEY)
  const { length } = useAtChildrenCounter(RADIO_GROUP_COUNT_RADIO_KEY)

  return {
    length,
    radios: childProviders,
    bindRadios: bindChildren,
  }
}
