import VarStyleProvider from './StyleProvider.vue'
import { formatStyleVars } from '../utils/elements'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as styleProviderProps } from './props'

export type StyleVars = Record<string, string>

const styleId = 'varlet-style-vars'

function removeStyle() {
  const style = document.head.querySelector(`#${styleId}`)
  if (style) {
    document.head.removeChild(style)
  }
}

function insertStyle(content: string) {
  const style = document.createElement('style')
  style.id = styleId
  style.innerHTML = content
  document.head.appendChild(style)
}

function StyleProvider(styleVars: StyleVars | null) {
  if (styleVars == null) {
    removeStyle()
    return
  }

  const styles: StyleVars = formatStyleVars(styleVars ?? {})
  const content = Object.entries(styles).reduce((content, [key, value]) => {
    content += `${key}:${value};`
    return content
  }, `:root:root {\n`)

  removeStyle()
  insertStyle(`${content}\n}`)
}

StyleProvider.Component = VarStyleProvider
withInstall(VarStyleProvider)
withInstall(VarStyleProvider, StyleProvider)
withPropsDefaultsSetter(StyleProvider, styleProviderProps)

export { styleProviderProps }

export const _StyleProviderComponent = VarStyleProvider

export default StyleProvider
