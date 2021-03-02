import { ComputedRef } from 'vue'

export interface OptionProvider {
  label: ComputedRef<string | number>
  value: ComputedRef<string | number | boolean | undefined>
  selected: ComputedRef<boolean>
  sync(checked: boolean): void
}
