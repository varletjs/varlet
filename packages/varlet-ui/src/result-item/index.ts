// Component entry, the folder where the file exists will be exposed to the user
import ResultItem from './ResultItem.vue'
import type { App } from 'vue'

ResultItem.install = function (app: App) {
  app.component(ResultItem.name, ResultItem)
}

export const _ResultItemComponent = ResultItem

export default ResultItem
