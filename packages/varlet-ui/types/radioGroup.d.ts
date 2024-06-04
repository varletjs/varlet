import {
  VarComponent,
  BasicAttributes,
  Direction as RadioGroupDirection,
  ListenerProp,
  SetPropsDefaults,
} from './varComponent'
import { VNode } from 'vue'

export declare const radioGroupProps: Record<keyof RadioGroupProps, any>

export type RadioGroupValidateTrigger = 'onChange'

export { RadioGroupDirection }

export interface RadioGroupProps extends BasicAttributes {
  modelValue?: any
  direction?: RadioGroupDirection
  validateTrigger?: Array<RadioGroupValidateTrigger>
  rules?: Array<(value: any) => any>
  onChange?: ListenerProp<(value: any) => void>
  'onUpdate:modelValue'?: ListenerProp<(value: any) => void>
}

export class RadioGroup extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<RadioGroupProps>

  $props: RadioGroupProps

  $slots: {
    default(): VNode[]
  }

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _RadioGroupComponent extends RadioGroup {}
