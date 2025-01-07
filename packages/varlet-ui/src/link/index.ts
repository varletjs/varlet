import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import Link from './Link.vue'
import { props as linkProps } from './props'

withInstall(Link)
withPropsDefaultsSetter(Link, linkProps)

export { linkProps }

export const _LinkComponent = Link

export default Link
