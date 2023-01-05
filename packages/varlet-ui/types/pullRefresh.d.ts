import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'
import { VNode } from 'vue'

export interface PullRefreshProps extends BasicAttributes {
  modelValue?: boolean
  disabled?: boolean
  animationDuration?: number | string
  successDuration?: number | string
  bgColor?: string
  successBgColor?: string
  color?: string
  successColor?: string
  target?: string | HTMLElement
  onRefresh?: ListenerProp<() => void>
  'onUpdate:modelValue'?: ListenerProp<(value: boolean) => void>
}

export class PullRefresh extends VarComponent {
  $props: PullRefreshProps

  $slots: {
    default(): VNode[]
  }
}

export class _PullRefreshComponent extends PullRefresh {}
