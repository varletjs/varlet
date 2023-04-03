import type { App } from 'vue'
import List from './List.vue'

List.install = function (app: App) {
  app.component(List.name, List)
}

export { props as listProps } from './props'

export const _ListComponent = List

export default List
