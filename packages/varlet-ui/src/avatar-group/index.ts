import AvatarGroup from './AvatarGroup.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as avatarGroupProps } from './props'

withInstall(AvatarGroup)
withPropsDefaultsSetter(AvatarGroup, avatarGroupProps)

export { avatarGroupProps }

export const _AvatarGroupComponent = AvatarGroup

export default AvatarGroup
