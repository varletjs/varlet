import VirtualList from './VirtualList.vue'
import type { App } from 'vue'

VirtualList.install = function(app: App) {
  app.component(VirtualList.name, VirtualList)
}

export const _VirtualListComponent = VirtualList

export default VirtualList
