import type { App } from 'vue'
import Space from './Space'
import { mergeSpacePluginOptions, type SpacePluginOptions } from './context'

Space.install = function (app: App, spacePluginOptions: SpacePluginOptions) {
  mergeSpacePluginOptions(spacePluginOptions)

  app.component(Space.name, Space)
}

export const _SpaceComponent = Space

export default Space
