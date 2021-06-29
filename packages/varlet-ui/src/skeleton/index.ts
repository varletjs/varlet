import type { App } from 'vue'
import Skeleton from './Skeleton.vue'

Skeleton.install = function (app: App) {
  app.component(Skeleton.name, Skeleton)
}

export const _SkeletonComponent = Skeleton

export default Skeleton
