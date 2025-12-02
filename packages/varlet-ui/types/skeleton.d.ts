import { VNode } from 'vue'
import { BasicAttributes, SetPropsDefaults, VarComponent } from './varComponent'

export declare const skeletonProps: Record<keyof SkeletonProps, any>

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
  static setPropsDefaults: SetPropsDefaults<SkeletonProps>

  $props: SkeletonProps

  $slots: {
    default(): VNode[]
  }
}

export class _SkeletonComponent extends Skeleton {}
