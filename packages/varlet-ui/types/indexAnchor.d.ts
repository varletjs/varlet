import { VarComponent } from './varComponent'

export interface IndexAnchorProps {
  index: string | number
}

export class IndexAnchor extends VarComponent {
  $props: IndexAnchorProps
}
