import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as segmentedButtonProps } from './props'
import SegmentedButton from './SegmentedButton.vue'

withInstall(SegmentedButton)
withPropsDefaultsSetter(SegmentedButton, segmentedButtonProps)

export { segmentedButtonProps }

export const _SegmentedButtonComponent = SegmentedButton

export default SegmentedButton
