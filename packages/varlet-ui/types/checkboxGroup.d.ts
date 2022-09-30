import { VarComponent, BasicAttributes, Direction as CheckboxGroupDirection } from './varComponent'

export type CheckboxGroupValidateTrigger = 'onChange'

export { CheckboxGroupDirection }

export interface CheckboxGroupProps extends BasicAttributes {
  modelValue?: any[]
  max?: string | number
  direction?: CheckboxGroupDirection
  validateTrigger?: Array<CheckboxGroupValidateTrigger>
  rules?: Array<(value: any) => any>
  onChange?: (value: Array<any>) => void
  'onUpdate:modelValue'?: (value: Array<any>) => void
}

export class CheckboxGroup extends VarComponent {
  $props: CheckboxGroupProps

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void

  checkAll(): any

  inverseAll(): any
}

export class _CheckboxGroupComponent extends CheckboxGroup {}
