// Component entry, the folder where the file exists will be exposed to the user
import SpeedDial from './SpeedDial'
import type { App } from 'vue'

SpeedDial.install = function (app: App) {
  app.component(SpeedDial.name, SpeedDial)
}

export const _SpeedDialComponent = SpeedDial

export default SpeedDial
