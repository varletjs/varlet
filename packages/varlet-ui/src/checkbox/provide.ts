import { type ComputedRef } from 'vue'
import { useParent } from '@varlet/use'
import { CHECKBOX_GROUP_BIND_CHECKBOX_KEY, CheckboxGroupProvider } from '../checkbox-group/provide'
import { Validation } from '../form/provide'

export interface CheckboxProvider extends Validation {
  checkedValue: ComputedRef
  checked: ComputedRef<boolean>
  sync(values: Array<any>): void
}

export function useCheckboxGroup() {
  const { bindParent, parentProvider, index } = useParent<CheckboxGroupProvider, CheckboxProvider>(
    CHECKBOX_GROUP_BIND_CHECKBOX_KEY,
  )

  return {
    index,
    checkboxGroup: parentProvider,
    bindCheckboxGroup: bindParent,
  }
}
