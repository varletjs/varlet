import CountTo from './CountTo.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as countToProps } from './props'

withInstall(CountTo)
withPropsDefaultsSetter(CountTo, countToProps)

export { countToProps }

export const _CountToComponent = CountTo

export default CountTo
