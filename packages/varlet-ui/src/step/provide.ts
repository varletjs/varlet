import { type ComputedRef } from 'vue'
import { useParent } from '@varlet/use'
import { throwError } from '../utils/logger'
import { type StepsProvider, STEPS_BIND_STEP_KEY } from '../steps/provide'

export interface StepProvider {
  index: ComputedRef<number>
}

export function useSteps() {
  const { parentProvider, index, bindParent } = useParent<StepsProvider, StepProvider>(STEPS_BIND_STEP_KEY)

  if (!bindParent) {
    throwError('Steps', '<step/> must in <steps>')
  }

  return {
    index,
    steps: parentProvider,
    bindSteps: bindParent,
  }
}
