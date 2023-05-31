import { kebabCase, bigCamelize } from '@varlet/shared'
import { languages, Position, Hover, MarkdownString, type TextDocument, type ExtensionContext } from 'vscode'
import { componentsMap } from './componentsMap'
import {
  TAG_BIG_CAMELIZE_RE,
  DOCUMENTATION_EN,
  DOCUMENTATION_ZH,
  LANGUAGE_IDS,
  TAG_LINK_RE,
  LANGUAGES_TEXT,
} from './constant'
import { getLanguage } from './env'
import { getWebTypesTags } from './completions'

export function registerHover(context: ExtensionContext) {
  function provideHover(document: TextDocument, position: Position) {
    const line = document.lineAt(position)
    const linkComponents = line.text.match(TAG_LINK_RE) ?? []
    const bigCamelizeComponents = line.text.match(TAG_BIG_CAMELIZE_RE) ?? []
    const components = [...new Set([...linkComponents, ...bigCamelizeComponents.map(kebabCase)])] as string[]
    const isEnglish = getLanguage() === 'en-US'
    const languageText = LANGUAGES_TEXT[getLanguage()]
    const tags = getWebTypesTags()

    if (components.length) {
      const contents = components
        .filter((component) => componentsMap[component])
        .map((component) => {
          const name = `var-${component}`
          const tag = tags.find((tag) => tag.name === name)
          const { path } = componentsMap[component]
          const bigCamelName = bigCamelize(name)
          const text = `${languageText.hover.linkText}:${bigCamelName}`
          const documentation = isEnglish ? DOCUMENTATION_EN : DOCUMENTATION_ZH
          const link = `[Varlet -> ${text}](${documentation}${path})`

          if (!tag) {
            return {
              link,
              props: [],
              events: [],
              slots: [],
            }
          }

          const props = tag.attributes.map((attr) => {
            return {
              name: attr.name,
              description: attr.description,
              defaultValue: attr.default,
            }
          })

          const events = tag.events.map((event) => {
            return {
              name: event.name,
              description: event.description,
            }
          })

          const slots = tag.slots
            ? tag.slots.map((slot) => {
                return {
                  name: slot.name,
                  description: slot.description,
                }
              })
            : []

          return {
            link,
            props,
            events,
            slots,
          }
        })

      const hoverContents: MarkdownString[] = []
      contents
        .map((item) => {
          const { link, props, events, slots } = item
          const { hover: hoverText } = languageText
          let propsTableStr = `| ${hoverText.propname} | ${hoverText.description} | ${hoverText.default} | \n`
          let eventsTableStr = `| ${hoverText.eventname} | ${hoverText.description} | \n`
          let slotsTableStr = `| ${hoverText.slotname} | ${hoverText.description} | \n`
          propsTableStr += `| :--- | :--- | :--- | \n`
          eventsTableStr += `| :--- | :--- | \n`
          slotsTableStr += `| :--- | :--- | \n`
          props.forEach((prop) => {
            propsTableStr += `| ${prop.name} | ${prop.description} | ${prop.defaultValue} | \n`
          })
          events.forEach((event) => {
            eventsTableStr += `| ${event.name} | ${event.description} | \n`
          })
          slots.forEach((slot) => {
            slotsTableStr += `| ${slot.name} | ${slot.description} | \n`
          })
          return {
            link,
            propsTableStr,
            eventsTableStr,
            slotsTableStr,
          }
        })
        .forEach((item) => {
          hoverContents.push(new MarkdownString(item.link))
          hoverContents.push(new MarkdownString(item.propsTableStr))
          hoverContents.push(new MarkdownString(item.eventsTableStr))
          hoverContents.push(new MarkdownString(item.slotsTableStr))
        })

      return new Hover(hoverContents)
    }
  }

  context.subscriptions.push(
    languages.registerHoverProvider(LANGUAGE_IDS, {
      provideHover,
    })
  )
}
