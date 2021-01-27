import { App } from 'vue'
import Popup from './Popup.vue'

Popup.install = function (app: App) {
  app.component(Popup.name, Popup)
}

export default Popup
