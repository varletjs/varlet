import { VarComponent } from './varComponent'

export interface ProgressProps {
  mode?: 'linear' | 'circle'
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
