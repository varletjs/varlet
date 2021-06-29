import { VarComponent } from './varComponent'

export interface TabsProps {
  active?: string | number
  layoutDirection?: 'horizontal' | 'vertical'
  itemDirection?: 'horizontal' | 'vertical'
  fixedBottom?: boolean
  activeColor?: string
  inactiveColor?: string
  disabledColor?: string
  color?: string
  indicatorColor?: string
  indicatorSize?: string | number
  elevation?: boolean
  sticky?: boolean
  offsetTop?: string | number
  onClick?: (active: string | number) => void
  onChange?: (active: string | number) => void
  'onUpdate:active'?: (active: string | number) => void
}

export class Tabs extends VarComponent {
  $props: TabsProps

  resize(): void
}

export class _TabsComponent extends Tabs {}
