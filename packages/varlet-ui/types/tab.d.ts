import { VarComponent } from './varComponent'

interface TabProps {
  name?: string | number
  disabled?: boolean
  onClick?: (active: string | number, e: Event) => void
}

export class Tab extends VarComponent {
  $props: TabProps
}
