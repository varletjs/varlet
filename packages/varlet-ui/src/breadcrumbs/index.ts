// Component entry, the folder where the file exists will be exposed to the user
import breadcrumbs from './breadcrumbs.vue'
import type { App } from 'vue'

breadcrumbs.install = function (app: App) {
  app.component(breadcrumbs.name, breadcrumbs)
}

export const _breadcrumbsComponent = breadcrumbs

export default breadcrumbs
