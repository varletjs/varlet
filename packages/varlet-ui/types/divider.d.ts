import { VarComponent } from './varComponent'

export interface DividerProps {
  inset?: boolean | number
  vertical?: boolean
  description?: string
  margin?: string
  dashed?: boolean
}

export class Divider extends VarComponent {
  $props: DividerProps
}
