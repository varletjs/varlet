import Countdown from './Countdown.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as countdownProps } from './props'

withInstall(Countdown)
withPropsDefaultsSetter(Countdown, countdownProps)

export { countdownProps }

export const _CountdownComponent = Countdown

export default Countdown
