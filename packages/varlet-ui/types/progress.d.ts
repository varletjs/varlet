import { VarComponent, BasicAttributes, Type as ProgressType, SetPropsDefaults } from './varComponent'
import { VNode } from 'vue'

export type ProgressMode = 'linear' | 'circle'

export { ProgressType }

export declare const progressProps: Record<keyof ProgressProps, any>

export interface ProgressProps extends BasicAttributes {
  mode?: ProgressMode
  type?: ProgressType
  indeterminate?: boolean
  lineWidth?: string | number
  color?: string | Record<string, string>
  trackColor?: string
  label?: boolean
  labelClass?: string
  track?: boolean
  value?: number | string
  size?: number | string
  rotate?: number
}

export class Progress extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<ProgressProps>

  $props: ProgressProps

  $slots: {
    default(): VNode[]
  }
}

export class _ProgressComponent extends Progress {}
