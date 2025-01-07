import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as rateProps } from './props'
import Rate from './Rate.vue'

withInstall(Rate)
withPropsDefaultsSetter(Rate, rateProps)

export { rateProps }

export const _RateComponent = Rate

export default Rate
