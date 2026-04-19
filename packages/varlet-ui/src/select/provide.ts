import { useChildren } from '@varlet/use'
import { type ComputedRef } from 'vue'
import { type Validation } from '../form/provide'
import { type OptionProvider } from '../option/provide'
import { type SelectFilterMethod } from './props'

export const SELECT_BIND_OPTION_KEY = Symbol('SELECT_BIND_OPTION_KEY')

export interface SelectProvider extends Validation {
  pattern: ComputedRef<string>
  showMenu: ComputedRef<boolean>
  multiple: ComputedRef<boolean>
  filterable: ComputedRef<boolean>
  filter: SelectFilterMethod
  focusColor: ComputedRef<string | undefined>
  computeLabel(): void
  onSelect(optionProvider: OptionProvider): void
}

export function useOptions() {
  const { length, childProviders, bindChildren } = useChildren<SelectProvider, OptionProvider>(SELECT_BIND_OPTION_KEY)

  return {
    length,
    options: childProviders,
    bindOptions: bindChildren,
  }
}
