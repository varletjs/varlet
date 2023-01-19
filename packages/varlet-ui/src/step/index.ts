import type { App } from 'vue'
import Step from './Step.vue'

Step.install = function (app: App) {
  app.component(Step.name, Step)
}

export { props as stepProps } from './props'

export const _StepComponent = Step

export default Step
