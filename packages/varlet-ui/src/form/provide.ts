import { useChildren, useParent } from '@varlet/use'
import { getCurrentInstance, type ComputedRef, type ComponentInternalInstance } from 'vue'

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
  const { parentProvider, index, bindParent } = useParent<FormProvider, C>(FORM_BIND_FORM_ITEM_KEY)

  const instance = getCurrentInstance()!

  const bindForm = bindParent
    ? (formItemProvider: C) => {
        bindParent({ ...formItemProvider, instance })
      }
    : null

  return {
    index,
    form: parentProvider,
    bindForm,
  }
}

export function useFormItems() {
  const { childProviders, length, bindChildren } = useChildren<
    FormProvider,
    Validation & {
      instance: ComponentInternalInstance
    }
  >(FORM_BIND_FORM_ITEM_KEY)

  return {
    length,
    formItems: childProviders,
    bindFormItems: bindChildren,
  }
}
