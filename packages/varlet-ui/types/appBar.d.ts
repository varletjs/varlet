import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export interface AppBarProps extends BasicAttributes {
  color?: string
  textColor?: string
  title?: string
  titlePosition?: 'left' | 'center' | 'right'
  elevation?: boolean
}

export class AppBar extends VarComponent {
  $props: AppBarProps
}

export class _AppBarComponent extends AppBar {}
