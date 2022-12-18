// Component entry, the folder where the file exists will be exposed to the user
import BreadcrumbItem from './BreadcrumbItem.vue'
import type { App } from 'vue'

BreadcrumbItem.install = function (app: App) {
  app.component(BreadcrumbItem.name, BreadcrumbItem)
}

export const _BreadcrumbItemComponent = BreadcrumbItem

export default BreadcrumbItem
