import { useParent } from '@varlet/use'
import { SELECT_BIND_OPTION_KEY, type SelectProvider } from '../select/provide'
import { type ComputedRef } from 'vue'

export interface OptionProvider {
  label: ComputedRef<any>
  value: ComputedRef<any>
  selected: ComputedRef<boolean>
  sync(checked: boolean): void
}

export function useSelect() {
  const { index, parentProvider, bindParent } = useParent<SelectProvider, OptionProvider>(SELECT_BIND_OPTION_KEY)

  if (!bindParent) {
    throw Error('<var-option/> must in <var-select/>')
  }

  return {
    index,
    select: parentProvider,
    bindSelect: bindParent,
  }
}
