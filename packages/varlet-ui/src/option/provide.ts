import { ComputedRef } from 'vue'
import { useAtParentIndex, useParent } from '../utils/components'
import { SELECT_BIND_OPTION_KEY, SELECT_COUNT_OPTION_KEY, SelectProvider } from '../select/provide'

export interface OptionProvider {
  label: ComputedRef<any>
  value: ComputedRef<any>
  selected: ComputedRef<boolean>
  sync(checked: boolean): void
}

export function useSelect() {
  const { bindParent, parentProvider } = useParent<SelectProvider, OptionProvider>(SELECT_BIND_OPTION_KEY)
  const { index } = useAtParentIndex(SELECT_COUNT_OPTION_KEY)

  if (!bindParent || !parentProvider) {
    throw Error('<var-option/> must in <var-select/>')
  }

  return {
    index,
    select: parentProvider,
    bindSelect: bindParent,
  }
}
