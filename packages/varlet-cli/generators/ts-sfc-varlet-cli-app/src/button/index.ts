import type { App } from 'vue'
import SfcButton from './Button.vue'

SfcButton.install = function (app: App) {
  app.component(SfcButton.name, SfcButton)
}

export const _SfcButtonComponent = SfcButton

export default SfcButton
