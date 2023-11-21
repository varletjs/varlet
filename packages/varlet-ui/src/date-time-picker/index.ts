import DateTimePicker from './DateTimePicker'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as DateTimePickerProps } from './props'

withInstall(DateTimePicker)
withPropsDefaultsSetter(DateTimePicker, DateTimePickerProps)

export { DateTimePickerProps }

export const _DateTimePickerComponent = DateTimePicker

export default DateTimePicker
