import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export interface SkeletonProps extends BasicAttributes {
  loading?: boolean
  title?: boolean
  avatar?: boolean
  card?: boolean
  fullscreen?: boolean
  fullscreenZIndex?: string | number
  titleWidth?: string | number
  avatarSize?: string | number
  cardHeight?: string | number
  rows?: string | number
  rowsWidth?: (string | number)[]
}

export class Skeleton extends VarComponent {
  $props: SkeletonProps

  $slots: {
    default(): VNode[]
  }
}

export class _SkeletonComponent extends Skeleton {}
