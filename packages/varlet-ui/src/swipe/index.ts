import Swipe from './Swipe.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as swipeProps } from './props'

withInstall(Swipe)
withPropsDefaultsSetter(Swipe, swipeProps)

export { swipeProps }

export const _SwipeComponent = Swipe

export default Swipe
