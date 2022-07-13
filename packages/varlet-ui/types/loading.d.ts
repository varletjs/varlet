import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export interface LoadingProps extends BasicAttributes {
  type?: 'circle' | 'wave' | 'cube' | 'rect' | 'disappear'
  radius?: string | number
  size?: 'normal' | 'mini' | 'small' | 'large'
  color?: string
  description?: string
  show?: boolean
}

export class Loading extends VarComponent {
  $props: LoadingProps
}

export class _LoadingComponent extends Loading {}
