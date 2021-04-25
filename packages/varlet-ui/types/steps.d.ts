import { VarComponent } from './varComponent'

interface StepsProps {
  active?: string | number
  direction?: 'horizontal' | 'vertical'
  activeColor?: string
  inactiveColor?: string
  onClickStep?: (index: number) => void
}

export class Steps extends VarComponent {
  $props: StepsProps
}
