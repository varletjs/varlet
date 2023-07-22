import Skeleton from './Skeleton.vue'
import { withInstall } from '../utils/components'

withInstall(Skeleton)

export { props as skeletonProps } from './props'

export const _SkeletonComponent = Skeleton

export default Skeleton
