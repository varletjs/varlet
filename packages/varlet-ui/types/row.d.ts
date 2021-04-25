import { VarComponent } from './varComponent'

interface RowProps {
  gutter?: string | number
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
  align?: 'flex-start' | 'flex-center' | 'flex-end'
  onClick?: (e: Event) => void
}

export class Row extends VarComponent {
  $props: RowProps
}
