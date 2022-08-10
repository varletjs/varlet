import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export interface PullRefreshProps extends BasicAttributes {
  modelValue?: boolean
  disabled?: boolean
  animationDuration?: number | string
  successDuration?: number | string
  bgColor?: string
  successBgColor?: string
  color?: string
  successColor?: string
  onRefresh?: () => void
  'onUpdate:modelValue'?: (value: boolean) => void
}

export class PullRefresh extends VarComponent {
  $props: PullRefreshProps
}

export class _PullRefreshComponent extends PullRefresh {}
