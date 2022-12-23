import { VarComponent, BasicAttributes } from './varComponent'
import { ComputedRef, VNode, Ref } from 'vue'

export interface FormValidation {
  validate(): Promise<boolean>
  resetValidation(): void
  reset(): void
}

export type FormScrollToError = 'start' | 'end'

export interface FormProvider {
  disabled: ComputedRef<boolean>
  readonly: ComputedRef<boolean>
}

export interface FormProps extends BasicAttributes {
  disabled?: boolean
  readonly?: boolean
  scrollToError?: FormScrollToError
  scrollToErrorOffsetY?: number | string
}

export class Form extends VarComponent {
  static useForm(): {
    form: FormProvider | null

    bindForm: ((formValidation: FormValidation) => void) | null
  }

  static useValidation(): {
    errorMessage: Ref<string>

    validate(rules: any, value: any, apis?: any): Promise<boolean>

    resetValidation(): void

    validateWithTrigger<T>(validateTrigger: T[], trigger: T, rules: any, value: any, apis?: any): Promise<void>
  }

  $props: FormProps

  $slots: {
    default(): VNode[]
  }

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _FormComponent extends Form {}
