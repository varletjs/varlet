import Sticky from './Sticky.vue'
import { withInstall } from '../utils/components'

withInstall(Sticky)

export { props as stickyProps } from './props'

export const _StickyComponent = Sticky

export default Sticky
