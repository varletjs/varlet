import { VNode } from 'vue'
import { BasicAttributes, ListenerProp, SetPropsDefaults, VarComponent } from './varComponent'

export declare const segmentedButtonProps: Record<keyof SegmentedButtonProps, any>

export interface SegmentedButtonProps extends BasicAttributes {
  checkedValue?: any
  disabled?: boolean
  readonly?: boolean
  ripple?: boolean
  onClick?: ListenerProp<(e: Event) => void>
}

export interface SegmentedButtonDefaultData {
  checked: boolean
}

export interface SegmentedButtonCheckmarkData {
  checked: boolean
}

export class SegmentedButton extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<SegmentedButtonProps>

  $props: SegmentedButtonProps

  $slots: {
    checkmark(data: SegmentedButtonCheckmarkData): VNode[]
    default(data: SegmentedButtonDefaultData): VNode[]
  }
}

export class _SegmentedButtonComponent extends SegmentedButton {}
