import { VarComponent } from './varComponent'

export interface LoadingProps {
  type?: 'circle' | 'wave' | 'cube' | 'rect' | 'disappear'
  radius?: string | number
  size?: 'normal' | 'mini' | 'small' | 'large'
  color?: string
}

export class Loading extends VarComponent {
  $props: LoadingProps
}
