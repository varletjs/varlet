import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export declare const indexAnchorProps: Record<string, any>

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
