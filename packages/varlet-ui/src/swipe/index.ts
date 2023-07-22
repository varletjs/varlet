import Swipe from './Swipe.vue'
import { withInstall } from '../utils/components'

withInstall(Swipe)

export { props as swipeProps } from './props'

export const _SwipeComponent = Swipe

export default Swipe
