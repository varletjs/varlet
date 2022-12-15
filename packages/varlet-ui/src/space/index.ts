import type { App } from 'vue'
import Space from './Space'

Space.install = function (app: App) {
  app.component(Space.name, Space)
}

export const _SpaceComponent = Space

export default Space
