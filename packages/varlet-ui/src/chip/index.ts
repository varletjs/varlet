import Chip from './Chip.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as chipProps } from './props'

withInstall(Chip)
withPropsDefaultsSetter(Chip, chipProps)

export { chipProps }

export const _ChipComponent = Chip

export default Chip
