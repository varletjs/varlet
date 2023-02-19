import { VNode } from 'vue'
import { VarComponent, BasicAttributes, Type as ButtonType, Size as ButtonSize } from './varComponent'

export declare const buttonGroupProps: Record<string, any>

export type Mode = 'normal' | 'text' | 'outline'

export interface ButtonGroupProps extends BasicAttributes {
  type?: ButtonType
  size?: ButtonSize
  color?: string
  textColor?: string
  mode?: Mode
  vertical?: boolean
}

export class ButtonGroup extends VarComponent {
  $props: ButtonGroupProps

  $slots: {
    default(): VNode[]
  }
}

export class _ButtonGroupComponent extends ButtonGroup {}
