import Tooltip from './Tooltip.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as tooltipProps } from './props'

withInstall(Tooltip)
withPropsDefaultsSetter(Tooltip, tooltipProps)

export { tooltipProps }

export const _TooltipComponent = Tooltip

export default Tooltip
