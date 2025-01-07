import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as stickyProps } from './props'
import Sticky from './Sticky.vue'

withInstall(Sticky)
withPropsDefaultsSetter(Sticky, stickyProps)

export { stickyProps }

export const _StickyComponent = Sticky

export default Sticky
