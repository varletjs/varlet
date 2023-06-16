import { VarComponent, BasicAttributes, Type as ProgressType } from './varComponent'
import { VNode } from 'vue'

export type ProgressMode = 'linear' | 'circle'

export { ProgressType }

export declare const progressProps: Record<string, any>

export interface ProgressProps extends BasicAttributes {
  mode?: ProgressMode
  type?: ProgressType
  indeterminate?: boolean
  lineWidth?: string | number
  color?: string
  trackColor?: string
  label?: boolean
  labelClass?: string
  track?: boolean
  value?: number | string
  size?: number
  rotate?: number

  /** @deprecated  Use indeterminate to instead. */
  ripple?: boolean
}

export class Progress extends VarComponent {
  $props: ProgressProps

  $slots: {
    default(): VNode[]
  }
}

export class _ProgressComponent extends Progress {}
