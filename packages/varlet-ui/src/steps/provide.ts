import type { ComputedRef } from 'vue'
import { useAtChildrenCounter, useChildren } from '../utils/components'
import type { StepProvider } from '../step/provide'

export interface StepsProvider {
  active: ComputedRef<number | string>
  activeColor: ComputedRef<string | undefined>
  inactiveColor: ComputedRef<string | undefined>
  length: ComputedRef<number>
  direction: ComputedRef<string>
  clickStep: (index: number) => void
}

export const STEPS_BIND_STEP_KEY = Symbol('STEPS_BIND_STEP_KEY')
export const STEPS_COUNT_STEP_KEY = Symbol('STEPS_COUNT_STEP_KEY')

export function useStep() {
  const { bindChildren, childProviders } = useChildren<StepsProvider, StepProvider>(STEPS_BIND_STEP_KEY)
  const { length } = useAtChildrenCounter(STEPS_COUNT_STEP_KEY)

  return {
    length,
    step: childProviders,
    bindStep: bindChildren,
  }
}
