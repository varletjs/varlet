import type { App } from 'vue'
import Skeleton from './Skeleton.vue'

Skeleton.install = function (app: App) {
  app.component(Skeleton.name, Skeleton)
}

export { props as skeletonProps } from './props'

export const _SkeletonComponent = Skeleton

export default Skeleton
