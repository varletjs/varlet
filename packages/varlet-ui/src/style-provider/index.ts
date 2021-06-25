import VarStyleProvider from './StyleProvider.vue'
import type { App } from 'vue'
import { formatStyleVars } from '../utils/elements'

export type StyleVars = Record<string, string>

function StyleProvider(styleVars: StyleVars = {}) {
  const styles: StyleVars = formatStyleVars(styleVars)
  Object.entries(styles).forEach(([key, value]) => document.documentElement.style.setProperty(key, value))
}

StyleProvider.Component = VarStyleProvider

VarStyleProvider.install = function (app: App) {
  app.component(VarStyleProvider.name, VarStyleProvider)
}

StyleProvider.install = function (app: App) {
  app.component(VarStyleProvider.name, VarStyleProvider)
}

export default StyleProvider
