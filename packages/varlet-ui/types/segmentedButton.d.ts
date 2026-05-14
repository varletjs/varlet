import { VNode } from 'vue'
import { BasicAttributes, ListenerProp, SetPropsDefaults, VarComponent } from './varComponent'

export declare const segmentedButtonProps: Record<keyof SegmentedButtonProps, any>

export interface SegmentedButtonProps extends BasicAttributes {
  checkedValue?: any
  disabled?: boolean
  readonly?: boolean
  ripple?: boolean
  checkmark?: boolean
  onClick?: ListenerProp<(e: Event) => void>
}

export class SegmentedButton extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<SegmentedButtonProps>

  $props: SegmentedButtonProps

  $slots: {
    checkmark(): VNode[]
    default(): VNode[]
  }
}

export class _SegmentedButtonComponent extends SegmentedButton {}
