import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import Avatar from './Avatar.vue'
import { props as avatarProps } from './props'

withInstall(Avatar)
withPropsDefaultsSetter(Avatar, avatarProps)

export { avatarProps }

export const _AvatarComponent = Avatar

export default Avatar
