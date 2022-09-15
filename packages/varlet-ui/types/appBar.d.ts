import { VarComponent, BasicAttributes } from './varComponent'

export type AppBarTitlePosition = 'left' | 'center' | 'right'

export interface AppBarProps extends BasicAttributes {
  color?: string
  textColor?: string
  title?: string
  titlePosition?: AppBarTitlePosition
  elevation?: boolean
}

export class AppBar extends VarComponent {
  $props: AppBarProps
}

export class _AppBarComponent extends AppBar {}
