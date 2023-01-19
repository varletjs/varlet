import type { App } from 'vue'
import Overlay from './Overlay'

Overlay.install = function (app: App) {
  app.component(Overlay.name, Overlay)
}

export { props as overlayProps } from './props'

export const _OverlayComponent = Overlay

export default Overlay
