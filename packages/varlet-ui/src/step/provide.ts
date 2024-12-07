import { type ComputedRef } from 'vue'
import { useParent } from '@varlet/use'
import { assert } from '@varlet/shared'
import { type StepsProvider, STEPS_BIND_STEP_KEY } from '../steps/provide'

export interface StepProvider {
  index: ComputedRef<number>
}

export function useSteps() {
  const { parentProvider, index, bindParent } = useParent<StepsProvider, StepProvider>(STEPS_BIND_STEP_KEY)

  assert(!!bindParent, 'Steps', '<step/> must in <steps>')

  return {
    index,
    steps: parentProvider,
    bindSteps: bindParent,
  }
}
