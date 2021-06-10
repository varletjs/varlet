import { VarComponent } from './varComponent'

export interface TabItemProps {
  name?: string | number
}

export class TabItem extends VarComponent {
  $props: TabItemProps
}
