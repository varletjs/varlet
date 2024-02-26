import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'

export declare const iconProps: Record<keyof IconProps, any>

export interface IconProps extends BasicAttributes {
  name?: string
  size?: string | number
  color?: string
  namespace?: string
  animationClass?: string
  transition?: string | number
  onClick?: ListenerProp<(event: Event) => void>
}

export class Icon extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<IconProps>

  $props: IconProps
}

export class _IconComponent extends Icon {}
