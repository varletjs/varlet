import { Validation } from '../form/provide'
import { useAtParentIndex, useParent } from '../utils/components'
import { RADIO_GROUP_BIND_RADIO_KEY, RADIO_GROUP_COUNT_RADIO_KEY, RadioGroupProvider } from '../radio-group/provide'

export interface RadioProvider extends Validation {
  sync(value: any): void
}

export function useRadioGroup() {
  const { bindParent, parentProvider } = useParent<RadioGroupProvider, RadioProvider>(RADIO_GROUP_BIND_RADIO_KEY)
  const { index } = useAtParentIndex(RADIO_GROUP_COUNT_RADIO_KEY)

  return {
    index,
    radioGroup: parentProvider,
    bindRadioGroup: bindParent,
  }
}
