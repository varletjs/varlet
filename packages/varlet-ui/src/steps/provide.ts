import { type ComputedRef } from 'vue'
import { useChildren } from '@varlet/use'
import { type StepProvider } from '../step/provide'

export interface StepsProvider {
  active: ComputedRef<number | string>
  activeColor: ComputedRef<string | undefined>
  inactiveColor: ComputedRef<string | undefined>
  direction: ComputedRef<string>
  clickStep: (index: number) => void
}

export const STEPS_BIND_STEP_KEY = Symbol('STEPS_BIND_STEP_KEY')

export function useStep() {
  const { bindChildren, childProviders } = useChildren<StepsProvider, StepProvider>(STEPS_BIND_STEP_KEY)

  return {
    step: childProviders,
    bindStep: bindChildren,
  }
}
