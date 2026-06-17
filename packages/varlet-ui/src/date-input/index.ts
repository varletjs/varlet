import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import DateInput from './DateInput.vue'
import { props as dateInputProps } from './props'

withInstall(DateInput)
withPropsDefaultsSetter(DateInput, dateInputProps)

export { dateInputProps }

export const _DateInputComponent = DateInput

export default DateInput
