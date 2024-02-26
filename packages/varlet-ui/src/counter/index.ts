import Counter from './Counter.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as counterProps } from './props'

withInstall(Counter)
withPropsDefaultsSetter(Counter, counterProps)

export { counterProps }

export const _CounterComponent = Counter

export default Counter
