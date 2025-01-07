import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as timePickerProps } from './props'
import TimePicker from './TimePicker.vue'

withInstall(TimePicker)
withPropsDefaultsSetter(TimePicker, timePickerProps)

export { timePickerProps }

export const _TimePickerComponent = TimePicker

export default TimePicker
