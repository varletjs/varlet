import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import InputOtpItem from './InputOtpItem.vue'
import { props as inputOtpItemProps } from './props'

withInstall(InputOtpItem)
withPropsDefaultsSetter(InputOtpItem, inputOtpItemProps)

export { inputOtpItemProps }

export const _InputOtpItemComponent = InputOtpItem

export default InputOtpItem
