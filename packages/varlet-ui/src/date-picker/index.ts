import DatePicker from './DatePicker.vue'
import { withInstall } from '../utils/components'

withInstall(DatePicker)

export { props as datePickerProps } from './props'

export const _DatePickerComponent = DatePicker

export default DatePicker
