import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export type ProgressMode = 'linear' | 'circle'

export declare const progressProps: Record<string, any>

export interface ProgressProps extends BasicAttributes {
  mode?: ProgressMode
  lineWidth?: string | number
  color?: string
  trackColor?: string
  ripple?: boolean
  label?: boolean
  labelClass?: string
  track?: boolean
  value?: number | string
  size?: number
  rotate?: number
}

export class Progress extends VarComponent {
  $props: ProgressProps

  $slots: {
    default(): VNode[]
  }
}

export class _ProgressComponent extends Progress {}
