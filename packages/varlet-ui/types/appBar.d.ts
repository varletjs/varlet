import { VNode } from 'vue'
import { BasicAttributes, SetPropsDefaults, VarComponent } from './varComponent'

export declare const appBarProps: Record<keyof AppBarProps, any>

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
  fixed?: boolean
  placeholder?: boolean
  zIndex?: number | string
  border?: boolean
}

export class AppBar extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<AppBarProps>

  $props: AppBarProps

  $slots: {
    default(): VNode[]
    left(): VNode[]
    right(): VNode[]
    content(): VNode[]
  }
}

export class _AppBarComponent extends AppBar {}
