import { ComputedRef } from 'vue'
import { Validation } from '../form/provide'
import { useParent } from '@varlet/use'
import { CHECKBOX_GROUP_BIND_CHECKBOX_KEY, CheckboxGroupProvider } from '../checkbox-group/provide'

export interface CheckboxProvider extends Validation {
  checkedValue: ComputedRef
  checked: ComputedRef<boolean>
  sync(values: Array<any>): void
  resetWithAnimation(): void
}

export function useCheckboxGroup() {
  const { bindParent, parentProvider, index } = useParent<CheckboxGroupProvider, CheckboxProvider>(
    CHECKBOX_GROUP_BIND_CHECKBOX_KEY
  )

  return {
    index,
    checkboxGroup: parentProvider,
    bindCheckboxGroup: bindParent,
  }
}
