import { bigCamelize, kebabCase } from '@varlet/shared'
import { languages, Position, Hover, type TextDocument, type ExtensionContext } from 'vscode'
import { componentMap } from './componentMap'
import { TAG_BIG_CAMELIZE_RE, DOCUMENTATION, LANGUAGE_IDS, TAG_LINK_RE } from './constant'

export function registerHover(context: ExtensionContext) {
  function provideHover(document: TextDocument, position: Position) {
    const line = document.lineAt(position)
    const linkComponents = line.text.match(TAG_LINK_RE) ?? []
    const bigCamelizeComponents = line.text.match(TAG_BIG_CAMELIZE_RE) ?? []
    const components = [...new Set([...linkComponents, ...bigCamelizeComponents.map(kebabCase)])]

    if (components.length) {
      const contents = components
        .filter((component) => componentMap[component])
        .map((component) => {
          const { path } = componentMap[component]
          const text = `Watch ${bigCamelize(component)} component documentation`

          return `[Varlet -> ${text}](${DOCUMENTATION}${path})`
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
