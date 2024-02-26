import { VarComponent, BasicAttributes, SetPropsDefaults } from './varComponent'
import { VNode } from 'vue'

export declare const indexAnchorProps: Record<keyof IndexAnchorProps, any>

export interface IndexAnchorProps extends BasicAttributes {
  index: string | number
}

export class IndexAnchor extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<IndexAnchorProps>

  $props: IndexAnchorProps

  $slots: {
    default(): VNode[]
  }
}

export class _IndexAnchorComponent extends IndexAnchor {}
