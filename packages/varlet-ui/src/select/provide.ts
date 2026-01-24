import { type ComputedRef } from 'vue'
import { useChildren } from '@varlet/use'
import { type Validation } from '../form/provide'
import { type OptionProvider } from '../option/provide'
import { type FilterMethod } from './props'

export const SELECT_BIND_OPTION_KEY = Symbol('SELECT_BIND_OPTION_KEY')

export interface SelectProvider extends Validation {
  query: ComputedRef<string>
  multiple: ComputedRef<boolean>
  filterable: ComputedRef<boolean>
  filter: ComputedRef<FilterMethod>
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
