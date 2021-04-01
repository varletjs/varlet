import { ComputedRef } from 'vue'
import { useChildren, useParent } from '../utils/components'

export interface Validation {
  validate(): Promise<boolean>
  resetValidation(): void
  reset(): void
}

export interface FormProvider {
  disabled: ComputedRef<boolean>
  readonly: ComputedRef<boolean>
}

export const FORM_BIND_FORM_ITEM_KEY = Symbol('FORM_BIND_FORM_ITEM_KEY')

export function useForm<C = Validation>() {
  const { bindParent, parentProvider } = useParent<FormProvider, C>(FORM_BIND_FORM_ITEM_KEY)

  return {
    bindForm: bindParent,
    form: parentProvider,
  }
}

export function useFormItems() {
  const { bindChildren, childProviders } = useChildren<FormProvider, Validation>(FORM_BIND_FORM_ITEM_KEY)

  return {
    formItems: childProviders,
    bindFormItems: bindChildren,
  }
}
