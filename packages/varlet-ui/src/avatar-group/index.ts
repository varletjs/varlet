import AvatarGroup from './AvatarGroup.vue'
import { withInstall } from '../utils/components'

withInstall(AvatarGroup)

export { props as avatarGroupProps } from './props'

export const _AvatarGroupComponent = AvatarGroup

export default AvatarGroup
