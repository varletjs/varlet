import {
  VarComponent,
  BasicAttributes,
  Direction as CheckboxGroupDirection,
  ListenerProp,
  SetPropsDefaults,
} from './varComponent'
import { VNode } from 'vue'

export declare const checkboxGroupProps: Record<keyof CheckboxGroupProps, any>

export type CheckboxGroupValidateTrigger = 'onChange'

export { CheckboxGroupDirection }

export interface CheckboxGroupProps extends BasicAttributes {
  modelValue?: any[]
  max?: string | number
  direction?: CheckboxGroupDirection
  validateTrigger?: Array<CheckboxGroupValidateTrigger>
  rules?: Array<(value: any) => any>
  onChange?: ListenerProp<(value: Array<any>) => void>
  'onUpdate:modelValue'?: ListenerProp<(value: Array<any>) => void>
}

export class CheckboxGroup extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<CheckboxGroupProps>

  $props: CheckboxGroupProps

  $slots: {
    default(): VNode[]
  }

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void

  checkAll(): any

  inverseAll(): any
}

export class _CheckboxGroupComponent extends CheckboxGroup {}
