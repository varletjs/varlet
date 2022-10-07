import { VarComponent, BasicAttributes } from './varComponent'

export type RowJustify = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'

export type RowAlign = 'flex-start' | 'center' | 'flex-end'

export interface RowProps extends BasicAttributes {
  gutter?: string | number
  justify?: RowJustify
  align?: RowAlign
  direction?: string
  onClick?: (e: Event) => void
}

export class Row extends VarComponent {
  $props: RowProps
}

export class _RowComponent extends Row {}
