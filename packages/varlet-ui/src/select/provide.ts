import type { ComputedRef } from 'vue'
import type { OptionProvider } from '../option/provide'
import type { Validation } from '../form/provide'
import { useAtChildrenCounter, useChildren } from '../utils/components'

export const SELECT_BIND_OPTION_KEY = Symbol('SELECT_BIND_OPTION_KEY')
export const SELECT_COUNT_OPTION_KEY = Symbol('SELECT_COUNT_OPTION_KEY')

export interface SelectProvider extends Validation {
  wrapWidth: ComputedRef<string>
  multiple: ComputedRef<boolean>
  focusColor: ComputedRef<string | undefined>
  computeLabel(): void
  onSelect(optionProvider: OptionProvider): void
}

export function useOptions() {
  const { bindChildren, childProviders } = useChildren<SelectProvider, OptionProvider>(SELECT_BIND_OPTION_KEY)
  const { length } = useAtChildrenCounter(SELECT_COUNT_OPTION_KEY)

  return {
    length,
    options: childProviders,
    bindOptions: bindChildren,
  }
}
