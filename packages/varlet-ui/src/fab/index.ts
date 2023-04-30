// Component entry, the folder where the file exists will be exposed to the user
import Fab from './Fab'
import type { App } from 'vue'

Fab.install = function (app: App) {
  app.component(Fab.name, Fab)
}

export const _FabComponent = Fab

export default Fab
