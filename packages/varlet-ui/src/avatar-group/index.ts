import type { App } from 'vue'
import AvatarGroup from './AvatarGroup.vue'

AvatarGroup.install = function (app: App) {
  app.component(AvatarGroup.name, AvatarGroup)
}

export { props as avatarGroupProps } from './props'

export const _AvatarGroupComponent = AvatarGroup

export default AvatarGroup
