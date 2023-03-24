import { VNode } from 'vue'
import { VarComponent, BasicAttributes, Type as ButtonGroupType, Size as ButtonGroupSize } from './varComponent'

export declare const buttonGroupProps: Record<string, any>

export type ButtonGroupMode = 'normal' | 'text' | 'outline'

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
  $props: ButtonGroupProps

  $slots: {
    default(): VNode[]
  }
}

export class _ButtonGroupComponent extends ButtonGroup {}
