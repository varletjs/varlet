import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export interface StepsProps extends BasicAttributes {
  active?: string | number
  direction?: 'horizontal' | 'vertical'
  activeColor?: string
  inactiveColor?: string
  onClickStep?: (index: number) => void
}

export class Steps extends VarComponent {
  $props: StepsProps
}

export class _StepsComponent extends Steps {}
