import { bigCamelize, kebabCase } from '@varlet/shared'
import { languages, Position, Hover, type TextDocument, type ExtensionContext } from 'vscode'
import { componentMap } from './componentMap'
import { BIG_CAMELIZE_RE, getSite, LANGUAGE_IDS, LINK_RE } from './constant'

export function registerHover(context: ExtensionContext) {
  function provideHover(document: TextDocument, position: Position) {
    const line = document.lineAt(position)
    const linkComponents = line.text.match(LINK_RE) ?? []
    const bigCamelizeComponents = line.text.match(BIG_CAMELIZE_RE) ?? []
    const components = [...new Set([...linkComponents, ...bigCamelizeComponents.map(kebabCase)])]

    if (components.length) {
      const contents = components
        .filter((component) => componentMap[component])
        .map((component) => {
          const { site } = componentMap[component]
          const text = `Watch ${bigCamelize(component)} component documentation`

          return `[Varlet -> ${text}](${getSite()}${site})`
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
