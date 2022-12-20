// Component entry, the folder where the file exists will be exposed to the user
import breadcrumb from './Breadcrumb.vue'
import type { App } from 'vue'

breadcrumb.install = function (app: App) {
  app.component(breadcrumb.name, breadcrumb)
}

export const _breadcrumbComponent = breadcrumb

export default breadcrumb
