import Breadcrumb from './Breadcrumb.vue'
import type { App } from 'vue'

Breadcrumb.install = function (app: App) {
  app.component(Breadcrumb.name, Breadcrumb)
}

export { props as breadcrumbProps } from './props'

export const _BreadcrumbComponent = Breadcrumb

export default Breadcrumb
