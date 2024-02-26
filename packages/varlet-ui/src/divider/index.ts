import Divider from './Divider.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as dividerProps } from './props'

withInstall(Divider)
withPropsDefaultsSetter(Divider, dividerProps)

export { dividerProps }

export const _DividerComponent = Divider

export default Divider
