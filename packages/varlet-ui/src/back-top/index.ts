import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import BackTop from './BackTop.vue'
import { props as backTopProps } from './props'

withInstall(BackTop)
withPropsDefaultsSetter(BackTop, backTopProps)

export { backTopProps }

export const _BackTopComponent = BackTop

export default BackTop
