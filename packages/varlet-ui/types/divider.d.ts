import { VarComponent } from './varComponent'

export interface DividerProps {
  inset?: boolean | number
  vertical?: boolean
  description?: string
  margin?: string
}

export class Divider extends VarComponent {
  $props: DividerProps
}
