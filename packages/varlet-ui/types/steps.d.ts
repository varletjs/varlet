import { VarComponent } from './varComponent'

export interface StepsProps {
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
