import { VarComponent, BasicAttributes, Size as LoadingSize } from './varComponent'
import { VNode } from 'vue'

export declare const loadingProps: Record<string, any>

export type LoadingType = 'circle' | 'wave' | 'cube' | 'rect' | 'disappear'

export { LoadingSize }

export interface LoadingProps extends BasicAttributes {
  type?: LoadingType
  radius?: string | number
  size?: LoadingSize
  color?: string
  description?: string
  loading?: boolean
}

export class Loading extends VarComponent {
  $props: LoadingProps

  $slots: {
    default(): VNode[]
    description(): VNode[]
  }
}

export class _LoadingComponent extends Loading {}
