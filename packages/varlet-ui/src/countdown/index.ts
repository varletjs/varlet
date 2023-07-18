import Countdown from './Countdown.vue'
import { withInstall } from '../utils/components'

withInstall(Countdown)

export { props as countdownProps } from './props'

export const _CountdownComponent = Countdown

export default Countdown
