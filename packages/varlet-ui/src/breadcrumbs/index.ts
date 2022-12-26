import type { App } from 'vue'
import Breadcrumbs from './Breadcrumbs.vue'

Breadcrumbs.install = function (app: App) {
  app.component(Breadcrumbs.name, Breadcrumbs)
}

export const _BreadcrumbsComponent = Breadcrumbs

export default Breadcrumbs
