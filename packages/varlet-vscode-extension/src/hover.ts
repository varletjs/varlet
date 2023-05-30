import { kebabCase } from '@varlet/shared'
import { languages, Position, Hover, MarkdownString, type TextDocument, type ExtensionContext } from 'vscode'
import { componentsMap } from './componentsMap'
import { TAG_BIG_CAMELIZE_RE, LANGUAGE_IDS, TAG_LINK_RE } from './constant'
import { getLanguage } from './env'
import { getWebTypesTags } from './completions'

export function registerHover(context: ExtensionContext) {
  function provideHover(document: TextDocument, position: Position) {
    const line = document.lineAt(position)
    const linkComponents = line.text.match(TAG_LINK_RE) ?? []
    const bigCamelizeComponents = line.text.match(TAG_BIG_CAMELIZE_RE) ?? []
    const components = [...new Set([...linkComponents, ...bigCamelizeComponents.map(kebabCase)])] as string[]
    const language = getLanguage()
    const tags = getWebTypesTags()

    if (components.length) {
      const contents = components
        .filter((component) => componentsMap[component])
        .map((component) => {
          const name = `var-${component}`
          const tag = tags.find((tag) => tag.name === name)

          if (!tag) {
            return null
          }

          const props = tag.attributes.map((attr) => {
            return {
              name: attr.name,
              description: attr.description,
              defaultVal: attr.default,
            }
          })

          const events = tag.events.map((event) => {
            return {
              name: event.name,
              description: event.description,
              defaultVal: null,
            }
          })

          return {
            props,
            events,
          }
        })

      let propsTableStr =
        language === 'en-US' ? `| props name | description | default | \n` : `| 属性名称 | 描述 | 默认值 | \n`
      let eventsTableStr = language === 'en-US' ? `| events name | description | \n` : `| 事件名称 | 描述 | \n`
      propsTableStr += `| :--- | :--- | :--- | \n`
      eventsTableStr += `| :--- | :--- | \n`
      contents.forEach((item) => {
        if (item) {
          item.props.forEach((prop) => {
            propsTableStr += `| ${prop.name} | ${prop.description} | ${prop.defaultVal} | \n`
          })
          item.events.forEach((event) => {
            eventsTableStr += `| ${event.name} | ${event.description} | \n`
          })
        }
      })
      const hoverText = [new MarkdownString(propsTableStr), new MarkdownString(eventsTableStr)]
      return new Hover(hoverText)
    }
  }

  context.subscriptions.push(
    languages.registerHoverProvider(LANGUAGE_IDS, {
      provideHover,
    })
  )
}
