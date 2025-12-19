import { type ComputedRef } from 'vue'
import { assert } from '@varlet/shared'
import { useParent } from '@varlet/use'
import { INPUT_OTP_BIND_INPUT_OTP_ITEM_KEY, type InputOtpProvider } from '../input-otp/provide'

export interface InputOtpItemProvider {
  index: ComputedRef<number>
}

export function useInputOtp() {
  const { parentProvider, index, bindParent } = useParent<InputOtpProvider, InputOtpItemProvider>(
    INPUT_OTP_BIND_INPUT_OTP_ITEM_KEY,
  )

  assert(!!bindParent, 'InputOtpItem', '<var-input-otp-item/> must in <var-input-otp/>')

  return {
    index,
    inputOtp: parentProvider,
    bindInputOtp: bindParent,
  }
}
