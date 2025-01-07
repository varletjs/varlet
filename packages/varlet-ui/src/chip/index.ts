import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import Chip from './Chip.vue'
import { props as chipProps } from './props'

withInstall(Chip)
withPropsDefaultsSetter(Chip, chipProps)

export { chipProps }

export const _ChipComponent = Chip

export default Chip
