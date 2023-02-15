import { VarComponent, BasicAttributes } from './varComponent'

export declare const avatarGroupProps: Record<string, any>

export interface AvatarGroupProps extends BasicAttributes {
  offset?: number | string
  vertical?: boolean
}

export class AvatarGroup extends VarComponent {
  $props: AvatarGroupProps
}

export class _AvatarGroupComponent extends AvatarGroup {}
