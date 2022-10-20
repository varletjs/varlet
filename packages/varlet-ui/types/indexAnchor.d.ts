import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export interface IndexAnchorProps extends BasicAttributes {
  index: string | number
}

export class IndexAnchor extends VarComponent {
  $props: IndexAnchorProps

  $slots: {
    default(): VNode[]
  }
}

export class _IndexAnchorComponent extends IndexAnchor {}
