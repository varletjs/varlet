import type { App } from 'vue'
import Space from './Space'
import { SpaceOptions, mergeSpaceOptions } from './context'

Space.install = function (app: App, spaceOptions: SpaceOptions) {
  mergeSpaceOptions(spaceOptions)
  app.component(Space.name, Space)
}

export const _SpaceComponent = Space

export default Space
