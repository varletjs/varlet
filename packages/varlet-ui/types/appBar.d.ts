import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export declare const appBarProps: Record<string, any>

export type AppBarTitlePosition = 'left' | 'center' | 'right'

export interface AppBarProps extends BasicAttributes {
  color?: string
  textColor?: string
  title?: string
  titlePosition?: AppBarTitlePosition
  elevation?: boolean | string | number
  round?: boolean
  image?: string
  imageLinearGradient?: string
  safeAreaTop?: boolean
}

export class AppBar extends VarComponent {
  $props: AppBarProps

  $slots: {
    default(): VNode[]
    left(): VNode[]
    right(): VNode[]
    content(): VNode[]
  }
}

export class _AppBarComponent extends AppBar {}
