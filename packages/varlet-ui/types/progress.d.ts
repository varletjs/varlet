import { VarComponent, BasicAttributes } from './varComponent'

export type ProgressMode = 'linear' | 'circle'

export interface ProgressProps extends BasicAttributes {
  mode?: ProgressMode
  lineWidth?: string | number
  color?: string
  trackColor?: string
  ripple?: boolean
  showAction?: boolean
  showTrack?: boolean
  value?: number | string
  size?: number
  rotate?: number
}

export class Progress extends VarComponent {
  $props: ProgressProps
}

export class _ProgressComponent extends Progress {}
