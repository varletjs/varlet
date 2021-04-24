import { VarComponent } from './varComponent'

interface TabItemProps {
  name?: string | number
}

export class TabItem extends VarComponent {
  $props: TabItemProps
}
