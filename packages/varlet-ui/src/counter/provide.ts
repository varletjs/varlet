import { FORM_BIND_FORM_ITEM_KEY, FormProvider, Validation } from '../form/provide'
import { useParent } from '../utils/components'

export type CounterProvider = Validation

export function useForm() {
  const { bindParent, parentProvider } = useParent<FormProvider, CounterProvider>(FORM_BIND_FORM_ITEM_KEY)

  return {
    bindForm: bindParent,
    formProvider: parentProvider
  }
}
