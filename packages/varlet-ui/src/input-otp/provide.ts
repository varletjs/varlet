import type { Ref, WritableComputedRef } from 'vue'
import { useChildren } from '@varlet/use'
import { FieldDecoratorSize, FieldDecoratorVariant } from '../field-decorator/props'

export interface InputOtpProvider {
  parentModel: WritableComputedRef<string>
  activeInput: Ref<number>
  length: Ref<number>
  disabled: Ref<boolean>
  readonly: Ref<boolean>
  variant: Ref<FieldDecoratorVariant>
  size: Ref<FieldDecoratorSize>
  textColor: Ref<string>
  focusColor: Ref<string>
  blurColor: Ref<string>
  autofocus: Ref<boolean>
  onItemChange: (index: number, value?: string) => void
  onItemFocus: (index: number) => void
  onItemBlur: (index: number) => void
  reset: () => void
  validate: () => Promise<boolean>
  resetValidation: () => void
}

export const INPUT_OTP_BIND_INPUT_OTP_ITEM_KEY = Symbol('INPUT_OTP_BIND_INPUT_OTP_ITEM_KEY')

export function useInputOtpItems() {
  const { childProviders, length, bindChildren } = useChildren<InputOtpProvider, null>(
    INPUT_OTP_BIND_INPUT_OTP_ITEM_KEY,
  )

  return {
    length,
    inputOtpItems: childProviders,
    bindInputOtpItem: bindChildren,
  }
}
