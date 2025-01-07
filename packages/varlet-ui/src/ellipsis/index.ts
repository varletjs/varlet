import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import Ellipsis from './Ellipsis.vue'
import { props as ellipsisProps } from './props'

withInstall(Ellipsis)
withPropsDefaultsSetter(Ellipsis, ellipsisProps)

export { ellipsisProps }

export const _EllipsisComponent = Ellipsis

export default Ellipsis
