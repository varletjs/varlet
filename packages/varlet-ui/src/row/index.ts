import type { App } from 'vue'
import Row from './Row.vue'

Row.install = function (app: App) {
  app.component(Row.name, Row)
}

export { props as rowProps } from './props'

export const _RowComponent = Row

export default Row
