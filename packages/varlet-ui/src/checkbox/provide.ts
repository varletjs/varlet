import { ComputedRef } from 'vue'
import { Validation } from '../form/provide'
import { useAtParentIndex, useParent } from '../utils/components'
import {
  CHECKBOX_GROUP_BIND_CHECKBOX_KEY,
  CHECKBOX_GROUP_COUNT_CHECKBOX_KEY,
  CheckboxGroupProvider,
} from '../checkbox-group/provide'

export interface CheckboxProvider extends Validation {
  checkedValue: ComputedRef
  checked: ComputedRef<boolean>
  sync(values: Array<any>): void
  resetWithAnimation(): void
}

export function useCheckboxGroup() {
  const { bindParent, parentProvider } = useParent<CheckboxGroupProvider, CheckboxProvider>(
    CHECKBOX_GROUP_BIND_CHECKBOX_KEY
  )
  const { index } = useAtParentIndex(CHECKBOX_GROUP_COUNT_CHECKBOX_KEY)

  return {
    index,
    checkboxGroup: parentProvider,
    bindCheckboxGroup: bindParent,
  }
}
