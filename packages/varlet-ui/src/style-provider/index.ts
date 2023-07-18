import VarStyleProvider from './StyleProvider.vue'
import { formatStyleVars } from '../utils/elements'
import { withInstall } from '../utils/components'

export type StyleVars = Record<string, string>

const mountedVarKeys: string[] = []

function StyleProvider(styleVars: StyleVars | null) {
  mountedVarKeys.forEach((key) => document.documentElement.style.removeProperty(key))
  mountedVarKeys.length = 0

  const styles: StyleVars = formatStyleVars(styleVars ?? {})
  Object.entries(styles).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value)
    mountedVarKeys.push(key)
  })
}

StyleProvider.Component = VarStyleProvider
withInstall(VarStyleProvider)
withInstall(VarStyleProvider, StyleProvider)

export { props as styleProviderProps } from './props'

export const _StyleProviderComponent = VarStyleProvider

export default StyleProvider
