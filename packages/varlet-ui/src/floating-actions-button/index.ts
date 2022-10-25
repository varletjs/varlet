// Component entry, the folder where the file exists will be exposed to the user
import FloatingActionsButton from './FloatingActionsButton.vue'
import type { App } from 'vue'

FloatingActionsButton.install = function (app: App) {
  app.component(FloatingActionsButton.name, FloatingActionsButton)
}

export const _FloatingActionsButtonComponent = FloatingActionsButton

export default FloatingActionsButton
