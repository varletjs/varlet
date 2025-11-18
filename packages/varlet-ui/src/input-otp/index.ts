import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import InputOtp from './InputOtp.vue'
import { props as inputOtpProps } from './props'

withInstall(InputOtp)
withPropsDefaultsSetter(InputOtp, inputOtpProps)

export { inputOtpProps }

export const _InputOtpComponent = InputOtp

export default InputOtp
