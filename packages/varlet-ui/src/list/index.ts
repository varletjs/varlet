import { App } from 'vue'
import List from './List.vue'

List.install = function(app: App) {
  app.component(List.name, List)
}

export default List
