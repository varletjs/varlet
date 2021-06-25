import type { ComputedRef } from 'vue'
import { Validation } from '../form/provide'
import { useAtChildrenCounter, useChildren } from '../utils/components'
import { CheckboxProvider } from '../checkbox/provide'

export interface CheckboxGroupProvider extends Validation {
  checkedCount: ComputedRef<number>
  errorMessage: ComputedRef<string>
  max: ComputedRef<number | string | undefined>
  onChecked(value: any): void
  onUnchecked(value: any): void
}

export const CHECKBOX_GROUP_BIND_CHECKBOX_KEY = Symbol('CHECKBOX_GROUP_BIND_CHECKBOX_KEY')
export const CHECKBOX_GROUP_COUNT_CHECKBOX_KEY = Symbol('CHECKBOX_GROUP_COUNT_CHECKBOX_KEY')

export function useCheckboxes() {
  const { bindChildren, childProviders } = useChildren<CheckboxGroupProvider, CheckboxProvider>(
    CHECKBOX_GROUP_BIND_CHECKBOX_KEY
  )
  const { length } = useAtChildrenCounter(CHECKBOX_GROUP_COUNT_CHECKBOX_KEY)

  return {
    length,
    checkboxes: childProviders,
    bindCheckboxes: bindChildren,
  }
}
