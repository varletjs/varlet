import { VarComponent } from './varComponent'

export interface RowProps {
  gutter?: string | number
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
  align?: 'flex-start' | 'center' | 'flex-end'
  onClick?: (e: Event) => void
}

export class Row extends VarComponent {
  $props: RowProps
}

export class _RowComponent extends Row {}
