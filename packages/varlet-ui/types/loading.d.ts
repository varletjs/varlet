import { VarComponent, BasicAttributes, Size as LoadingSize, SetPropsDefaults } from './varComponent'
import { VNode } from 'vue'

export declare const loadingProps: Record<keyof LoadingProps, any>

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
  static setPropsDefaults: SetPropsDefaults<LoadingProps>

  $props: LoadingProps

  $slots: {
    default(): VNode[]
    description(): VNode[]
  }
}

export class _LoadingComponent extends Loading {}
