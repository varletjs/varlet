import { VarComponent } from './varComponent'

interface PullRefreshProps {
  modelValue?: boolean
  disable?: boolean
  animationDuration?: number | string
  successDuration?: number | string
  bgColor?: string
  successBgColor?: string
  color?: string
  successColor?: string
  onRefresh: () => void
  'onUpdate:modelValue': (value: boolean) => void
}

export class PullRefresh extends VarComponent {
  $props: PullRefreshProps
}
