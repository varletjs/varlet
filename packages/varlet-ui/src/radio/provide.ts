import { Validation } from '../form/provide'
import { useParent } from '@varlet/use'
import { RADIO_GROUP_BIND_RADIO_KEY, RadioGroupProvider } from '../radio-group/provide'

export interface RadioProvider extends Validation {
  sync(value: any): void
}

export function useRadioGroup() {
  const { bindParent, parentProvider, index } = useParent<RadioGroupProvider, RadioProvider>(RADIO_GROUP_BIND_RADIO_KEY)

  return {
    index,
    radioGroup: parentProvider,
    bindRadioGroup: bindParent,
  }
}
