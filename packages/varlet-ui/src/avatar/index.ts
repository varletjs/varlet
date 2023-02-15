import type { App } from 'vue'
import Avatar from './Avatar.vue'

Avatar.install = function (app: App) {
  app.component(Avatar.name, Avatar)
}

export { props as avatarProps } from './props'

export const _AvatarComponent = Avatar

export default Avatar
