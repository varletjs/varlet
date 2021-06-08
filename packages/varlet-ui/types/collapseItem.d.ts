import { VarComponent } from './varComponent'

export interface CollapseItemProps {
  name?: string | number
  title?: string
  icon?: string
  disabled?: boolean
}

export class CollapseItem extends VarComponent {
  $props: CollapseItemProps
}
