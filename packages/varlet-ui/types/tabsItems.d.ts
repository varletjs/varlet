import { VarComponent } from './varComponent'

export interface TabsItemsProps {
  active?: string | number
  'onUpdate:active'?: (active: string | number) => void
}

export class TabsItems extends VarComponent {
  $props: TabsItemsProps
}
