import Avatar from './Avatar.vue'
import { withInstall } from '../utils/components'

withInstall(Avatar)

export { props as avatarProps } from './props'

export const _AvatarComponent = Avatar

export default Avatar
