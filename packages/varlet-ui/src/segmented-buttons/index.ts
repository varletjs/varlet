import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as segmentedButtonsProps } from './props'
import SegmentedButtons from './SegmentedButtons.vue'

withInstall(SegmentedButtons)
withPropsDefaultsSetter(SegmentedButtons, segmentedButtonsProps)

export { segmentedButtonsProps }

export const _SegmentedButtonsComponent = SegmentedButtons

export default SegmentedButtons
