import OtpInput from './OtpInput.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as otpInputProps } from './props'

withInstall(OtpInput)
withPropsDefaultsSetter(OtpInput, otpInputProps)

export { otpInputProps }

export const _OtpInputComponent = OtpInput

export default OtpInput
