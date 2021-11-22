import type { App } from 'vue'
import Popup from './Popup'

Popup.install = function (app: App) {
  app.component(Popup.name, Popup)
}

export const _PopupComponent = Popup

export default Popup
