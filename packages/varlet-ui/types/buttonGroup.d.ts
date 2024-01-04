import { VNode } from 'vue'
import {
  VarComponent,
  BasicAttributes,
  Type as ButtonGroupType,
  Size as ButtonGroupSize,
  SetPropsDefaults,
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
