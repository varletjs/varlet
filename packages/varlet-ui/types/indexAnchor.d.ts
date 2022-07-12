import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export interface IndexAnchorProps extends BasicAttributes {
  index: string | number
}

export class IndexAnchor extends VarComponent {
  $props: IndexAnchorProps
}

export class _IndexAnchorComponent extends IndexAnchor {}
