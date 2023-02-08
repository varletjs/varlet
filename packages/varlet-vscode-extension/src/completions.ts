import enWebTypes from '@varlet/ui/highlight/web-types.en-US.json'
import zhWebTypes from '@varlet/ui/highlight/web-types.zh-CN.json'
import icons, { pointCodes } from '@varlet/icons'
import {
  languages,
  Range,
  CompletionItem,
  CompletionItemKind,
  Position,
  MarkdownString,
  type ExtensionContext,
  type CompletionItemProvider,
} from 'vscode'
import { componentsMap, type ComponentDescriptor } from './componentsMap'
import { bigCamelize, isString, kebabCase } from '@varlet/shared'
import { ATTR_RE, DOCUMENTATION_EN, DOCUMENTATION_ZH, ICONS_STATIC, LANGUAGE_IDS, PROP_NAME_RE } from './constant'
import { getLanguage } from './env'

export function getWebTypesTags() {
  return (getLanguage() === 'en-US' ? enWebTypes : zhWebTypes).contributions.html.tags
}

export interface AttrProviderOptions {
  props: boolean
  events: boolean
}

export function registerCompletions(context: ExtensionContext) {
  const componentsProvider: CompletionItemProvider = {
    provideCompletionItems() {
      const completionItems: CompletionItem[] = []

      Object.keys(componentsMap).forEach((key) => {
        const name = `var-${key}`

        completionItems.push(
          new CompletionItem(name, CompletionItemKind.Field),
          new CompletionItem(bigCamelize(name), CompletionItemKind.Field)
        )
      })

      return completionItems
    },

    resolveCompletionItem(item: CompletionItem) {
      const name = kebabCase(item.label as string).slice(4)
      const descriptor: ComponentDescriptor = componentsMap[name]

      const attrText = descriptor.attrs ? ' ' + descriptor.attrs.join(' ') : ''
      const tagSuffix = descriptor.closeSelf ? '' : `</${item.label}>`
      const characterDelta = -tagSuffix.length + (descriptor.characterDelta ?? 0)

      item.insertText = `<${item.label}${attrText}`
      item.insertText += descriptor.closeSelf ? '/>' : `>${tagSuffix}`
      item.command = {
        title: 'varlet.move-cursor',
        command: 'varlet.move-cursor',
        arguments: [characterDelta],
      }

      return item
    },
  }

  const iconsProvider: CompletionItemProvider = {
    provideCompletionItems(document, position) {
      const line = document.getText(
        new Range(new Position(position.line, 0), new Position(position.line, position.character))
      )

      if (!PROP_NAME_RE.test(line)) {
        return null
      }

      const completionItems: CompletionItem[] = icons.map((icon: string) => {
        return new CompletionItem(icon, CompletionItemKind.Field)
      })

      return completionItems
    },

    resolveCompletionItem(completionItem) {
      const id = completionItem.label
      const url = `${ICONS_STATIC}/u${pointCodes[id as string]}-${id}.png?t=${Date.now()}`
      const documentation = getLanguage() === 'en-US' ? DOCUMENTATION_EN : DOCUMENTATION_ZH
      const markdownString = new MarkdownString(`[icon: ${id}](${documentation}/icon)
<p align="center"><img height="80" src="${url}"></p>
<br>
`)

      markdownString.supportHtml = true

      return {
        ...completionItem,
        documentation: markdownString,
      }
    },
  }

  const attrProvider: CompletionItemProvider = {
    provideCompletionItems(document, position) {
      const text = document.getText(new Range(new Position(0, 0), new Position(position.line, position.character)))

      if (!Array.from(text.matchAll(ATTR_RE)).length) {
        return null
      }

      let name: string
      let lastValue: string
      let startIndex: number

      // eslint-disable-next-line no-restricted-syntax
      for (const matched of text.matchAll(ATTR_RE)) {
        name = kebabCase(matched[1] ?? matched[2])
        lastValue = matched[0]
        startIndex = matched.index!
      }

      const currentIndex = text.length
      const endIndex = startIndex! + lastValue!.length

      if (currentIndex > endIndex || currentIndex < startIndex!) {
        return null
      }

      const tags = getWebTypesTags()
      const tag = tags.find((tag) => tag.name === name)

      if (!tag) {
        return null
      }

      const hasAt = text.endsWith('@')
      const hasColon = text.endsWith(':')

      const events = tag.events.map((event) => {
        const item = new CompletionItem(
          {
            label: `@${event.name}`,
            description: event.description,
          },
          CompletionItemKind.Event
        )

        item.documentation = new MarkdownString(`\
**Event**: ${event.name}
        
**Description**: ${event.description}`)
        item.insertText = hasAt ? event.name : `@${event.name}`

        return item
      })

      const props = tag.attributes.map((attr) => {
        const item = new CompletionItem(
          {
            label: attr.name,
            description: attr.description,
          },
          CompletionItemKind.Value
        )

        item.sortText = '0'

        item.documentation = new MarkdownString(`\
**Prop**: ${attr.name}

**Description**: ${attr.description}

**Type**: ${attr.value.type}

**Default**: ${attr.default}`)

        item.insertText = attr.name

        return item
      })

      return [...(hasAt ? [] : props), ...(hasColon ? [] : events)]
    },

    resolveCompletionItem(item: CompletionItem) {
      if (!isString(item.label)) {
        item.command = {
          title: 'varlet.move-cursor',
          command: 'varlet.move-cursor',
          arguments: [-1],
        }
        item.insertText = `${item.insertText}=""`
      }

      return item
    },
  }

  context.subscriptions.push(languages.registerCompletionItemProvider(LANGUAGE_IDS, componentsProvider))
  context.subscriptions.push(languages.registerCompletionItemProvider(LANGUAGE_IDS, iconsProvider, '"', "'"))
  context.subscriptions.push(languages.registerCompletionItemProvider(LANGUAGE_IDS, attrProvider, ' ', '@', ':'))
}
