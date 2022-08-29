import { VarComponent, BasicAttributes, Size as LoadingSize } from './varComponent'

export type LoadingType = 'circle' | 'wave' | 'cube' | 'rect' | 'disappear'

export interface LoadingProps extends BasicAttributes {
  type?: LoadingType
  radius?: string | number
  size?: LoadingSize
  color?: string
  description?: string
  show?: boolean
}

export class Loading extends VarComponent {
  $props: LoadingProps
}

export class _LoadingComponent extends Loading {}
