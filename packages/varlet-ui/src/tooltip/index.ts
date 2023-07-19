import Tooltip from './Tooltip.vue'
import { withInstall } from '../utils/components'

withInstall(Tooltip)

export { props as tooltipProps } from './props'

export const _TooltipComponent = Tooltip

export default Tooltip
