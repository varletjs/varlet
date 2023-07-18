import TimePicker from './TimePicker.vue'
import { withInstall } from '../utils/components'

withInstall(TimePicker)

export { props as timePickerProps } from './props'

export const _TimePickerComponent = TimePicker

export default TimePicker
