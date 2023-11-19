import Sticky from './Sticky.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as stickyProps } from './props'

withInstall(Sticky)
withPropsDefaultsSetter(Sticky, stickyProps)

export { stickyProps }

export const _StickyComponent = Sticky

export default Sticky
