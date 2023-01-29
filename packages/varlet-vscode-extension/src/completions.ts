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
import { componentMap, type ComponentDescriptor } from './componentMap'
import { bigCamelize, kebabCase } from '@varlet/shared'
import { LANGUAGE_IDS, PROP_NAME_RE } from './constant'

export function registerCompletions(context: ExtensionContext) {
  const componentProvider: CompletionItemProvider = {
    provideCompletionItems() {
      const completionItems: CompletionItem[] = []

      Object.keys(componentMap).forEach((key) => {
        completionItems.push(
          new CompletionItem(`var-${key}`, CompletionItemKind.Field),
          new CompletionItem(bigCamelize(`var-${key}`), CompletionItemKind.Field)
        )
      })

      return completionItems
    },

    resolveCompletionItem(item: CompletionItem) {
      const name = kebabCase(item.label as string).slice(4)
      const descriptor: ComponentDescriptor = componentMap[name]

      const attrText = descriptor.attrs ? ' ' + descriptor.attrs.join(' ') : ''
      const tagSuffix = descriptor.closeSelf ? '' : `</${item.label}>`
      const characterDelta = -tagSuffix.length + (descriptor.characterDelta ?? 0)

      item.insertText = `<${item.label}${attrText}`
      item.insertText += descriptor.closeSelf ? '/>' : `>${tagSuffix}`
      item.command = {
        title: 'move-cursor',
        command: 'move-cursor',
        arguments: [characterDelta],
      }

      return item
    },
  }

  const iconProvider: CompletionItemProvider = {
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
      const url = `https://varlet.gitee.io/varlet-ui/icons/u${pointCodes[id as string]}-${id}.svg`
      const markdownString = new MarkdownString(`####    Varlet Icon: ${id}
<p align="center"><img height="64" src="${url}"></p>`)

      markdownString.supportHtml = true

      return {
        ...completionItem,
        documentation: markdownString,
      }
    },
  }

  context.subscriptions.push(languages.registerCompletionItemProvider(LANGUAGE_IDS, componentProvider))
  context.subscriptions.push(languages.registerCompletionItemProvider(LANGUAGE_IDS, iconProvider, '"', "'"))
}
