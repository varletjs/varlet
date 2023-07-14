import type { App } from 'vue'
import Drag from './Drag.vue'

Drag.install = function (app: App) {
  app.component(Drag.name, Drag)
}

export { props as dragProps } from './props'

export const _DragComponent = Drag

export default Drag
