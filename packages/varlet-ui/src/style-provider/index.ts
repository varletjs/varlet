import VarStyleProvider from './StyleProvider.vue'
import type { App } from 'vue'
import { formatStyleVars } from '../utils/elements'

export type StyleVars = Record<string, string>

const mountedVarKeys: string[] = []

function StyleProvider(styleVars: StyleVars | null = {}) {
  mountedVarKeys.forEach((key) => document.documentElement.style.removeProperty(key))
  mountedVarKeys.length = 0

  const styles: StyleVars = formatStyleVars(styleVars)
  Object.entries(styles).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value)
    mountedVarKeys.push(key)
  })
}

StyleProvider.Component = VarStyleProvider

VarStyleProvider.install = function (app: App) {
  app.component(VarStyleProvider.name, VarStyleProvider)
}

StyleProvider.install = function (app: App) {
  app.component(VarStyleProvider.name, VarStyleProvider)
}

export const _StyleProviderComponent = VarStyleProvider

export default StyleProvider
