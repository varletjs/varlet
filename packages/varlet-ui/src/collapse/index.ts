import Collapse from './Collapse.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as collapseProps } from './props'

withInstall(Collapse)
withPropsDefaultsSetter(Collapse, collapseProps)

export { collapseProps }

export const _CollapseComponent = Collapse

export default Collapse
