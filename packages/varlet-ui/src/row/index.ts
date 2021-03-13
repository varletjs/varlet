import { App } from 'vue'
import Row from './Row.vue'

Row.install = function(app: App) {
  app.component(Row.name, Row)
}

export default Row
