import { VNode } from 'vue'
import {
  BasicAttributes,
  Size as ButtonGroupSize,
  Type as ButtonGroupType,
  SetPropsDefaults,
  VarComponent,
} from './varComponent'

export declare const buttonGroupProps: Record<keyof ButtonGroupProps, any>

export type ButtonGroupMode = 'normal' | 'text' | 'outline' | 'icon-container'

export interface ButtonGroupProps extends BasicAttributes {
  type?: ButtonGroupType
  size?: ButtonGroupSize
  color?: string
  textColor?: string
  mode?: ButtonGroupMode
  vertical?: boolean
  elevation?: boolean | number | string
}

export class ButtonGroup extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<ButtonGroupProps>

  $props: ButtonGroupProps

  $slots: {
    default(): VNode[]
  }
}

export class _ButtonGroupComponent extends ButtonGroup {}
