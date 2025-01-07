import { VNode } from 'vue'
import { BasicAttributes, SetPropsDefaults, VarComponent } from './varComponent'

export declare const avatarGroupProps: Record<keyof AvatarGroupProps, any>

export interface AvatarGroupProps extends BasicAttributes {
  offset?: number | string
  vertical?: boolean
}

export class AvatarGroup extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<AvatarGroupProps>

  $props: AvatarGroupProps

  $slots: {
    default(): VNode[]
  }
}

export class _AvatarGroupComponent extends AvatarGroup {}
