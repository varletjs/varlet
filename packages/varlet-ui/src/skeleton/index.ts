import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as skeletonProps } from './props'
import Skeleton from './Skeleton.vue'

withInstall(Skeleton)
withPropsDefaultsSetter(Skeleton, skeletonProps)

export { skeletonProps }

export const _SkeletonComponent = Skeleton

export default Skeleton
