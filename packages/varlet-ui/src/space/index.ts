import type { App } from 'vue'
import Space from './Space'
import { launchSpacePluginOptions, type SpacePluginOptions } from './context'

Space.install = function (app: App, spacePluginOptions: SpacePluginOptions) {
  launchSpacePluginOptions(spacePluginOptions)

  app.component(Space.name, Space)
}

export const _SpaceComponent = Space

export default Space
