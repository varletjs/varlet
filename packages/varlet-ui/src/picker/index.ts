import { App } from 'vue'
import Picker from './Picker.vue'

Picker.install = function (app: App) {
  app.component(Picker.name, Picker)
}

export default Picker
