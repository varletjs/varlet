import CollapseTransition from './CollapseTransition.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as collapseTransitionProps } from './props'

withInstall(CollapseTransition)
withPropsDefaultsSetter(CollapseTransition, collapseTransitionProps)

export { collapseTransitionProps }

export const _CollapseTransitionComponent = CollapseTransition

export default CollapseTransition
