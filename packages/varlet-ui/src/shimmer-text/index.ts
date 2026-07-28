import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as shimmerTextProps } from './props'
import ShimmerText from './ShimmerText.vue'

withInstall(ShimmerText)
withPropsDefaultsSetter(ShimmerText, shimmerTextProps)

export { shimmerTextProps }

export const _ShimmerTextComponent = ShimmerText

export default ShimmerText
