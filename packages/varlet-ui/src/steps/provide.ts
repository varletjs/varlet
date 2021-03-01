import { ComputedRef } from 'vue'

export interface StepsProvider {
  active: ComputedRef<number | string>
  activeColor: ComputedRef<string | undefined>
  inactiveColor: ComputedRef<string | undefined>
  length: ComputedRef<number>
  direction: ComputedRef<string>
  changeStep: (index: number) => void
}

export const STEPS_BIND_STEP_KEY = Symbol('STEPS_BIND_STEP_KEY')
export const STEPS_COUNT_STEP_KEY = Symbol('STEPS_COUNT_STEP_KEY')
