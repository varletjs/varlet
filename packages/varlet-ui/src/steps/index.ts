import type { App } from 'vue'
import Steps from './Steps.vue'

Steps.install = function (app: App) {
  app.component(Steps.name, Steps)
}

export { props as stepsProps } from './props'

export const _StepsComponent = Steps

export default Steps
