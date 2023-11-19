import Skeleton from './Skeleton.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as skeletonProps } from './props'

withInstall(Skeleton)
withPropsDefaultsSetter(Skeleton, skeletonProps)

export { skeletonProps }

export const _SkeletonComponent = Skeleton

export default Skeleton
