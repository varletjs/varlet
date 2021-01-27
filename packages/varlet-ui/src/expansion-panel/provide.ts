import { ComputedRef } from 'vue'

export interface ExpansionPanelProvider {
  index: ComputedRef<number>
  name: ComputedRef<string | number | undefined>
  init(accordion: boolean, show: boolean): void
}
