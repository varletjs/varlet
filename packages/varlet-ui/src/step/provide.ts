import { type ComputedRef } from 'vue'
import { useParent } from '@varlet/use'
import { error } from '../utils/logger'
import { type StepsProvider, STEPS_BIND_STEP_KEY } from '../steps/provide'

export interface StepProvider {
  index: ComputedRef<number>
}

export function useSteps() {
  const { parentProvider, index, bindParent } = useParent<StepsProvider, StepProvider>(STEPS_BIND_STEP_KEY)

  if (!bindParent) {
    error('Steps', '<step/> must in <steps>')
  }

  return {
    index,
    steps: parentProvider,
    bindSteps: bindParent,
  }
}
