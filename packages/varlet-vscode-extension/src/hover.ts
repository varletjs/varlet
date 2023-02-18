import { bigCamelize, kebabCase } from '@varlet/shared'
import { languages, Position, Hover, type TextDocument, type ExtensionContext } from 'vscode'
import { componentsMap } from './componentsMap'
import { TAG_BIG_CAMELIZE_RE, DOCUMENTATION_EN, DOCUMENTATION_ZH, LANGUAGE_IDS, TAG_LINK_RE } from './constant'
import { getLanguage } from './env'

export function registerHover(context: ExtensionContext) {
  function provideHover(document: TextDocument, position: Position) {
    const line = document.lineAt(position)
    const linkComponents = line.text.match(TAG_LINK_RE) ?? []
    const bigCamelizeComponents = line.text.match(TAG_BIG_CAMELIZE_RE) ?? []
    const components = [...new Set([...linkComponents, ...bigCamelizeComponents.map(kebabCase)])] as string[]

    if (components.length) {
      const contents = components
        .filter((component) => componentsMap[component])
        .map((component) => {
          const { path } = componentsMap[component]
          const language = getLanguage()
          const name = bigCamelize(component)

          const text = language === 'en-US' ? `Watch ${name} component documentation` : `查阅 ${name} 组件的官方文档`
          const documentation = language === 'en-US' ? DOCUMENTATION_EN : DOCUMENTATION_ZH

          return `[Varlet -> ${text}](${documentation}${path})`
        })
      return new Hover(contents)
    }
  }

  context.subscriptions.push(
    languages.registerHoverProvider(LANGUAGE_IDS, {
      provideHover,
    })
  )
}
