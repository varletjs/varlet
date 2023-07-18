import Counter from './Counter.vue'
import { withInstall } from '../utils/components'

withInstall(Counter)

export { props as counterProps } from './props'

export const _CounterComponent = Counter

export default Counter
