import { VarComponent } from './varComponent'

interface IndexAnchorProps {
  index: string | number
}

export class IndexAnchor extends VarComponent {
  $props: IndexAnchorProps
}
