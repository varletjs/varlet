import * as vscode from 'vscode'
import { componentMap, ComponentDescriptor } from './componentMap'
import { bigCamelize, kebabCase } from './utils'

const DOC = 'https://varlet.gitee.io/varlet-ui/#/zh-CN'
const DOC_VUE2 = 'https://varlet.gitee.io/varlet-ui-vue2/#/zh-CN'
const EN_DOC = 'https://varlet.gitee.io/varlet-ui/#/en-US'
const EN_DOC_VUE2 = 'https://varlet.gitee.io/varlet-ui-vue2/#/en-US'

const LINK_RE = /(?<=<var-)([\w-]+)/g
const BIG_CAMELIZE_RE = /(?<=<Var)([\w-]+)/g

const files = ['vue', 'typescript', 'javascript', 'javascriptreact', 'typescriptreact']

function provideCompletionItems() {
  const completionItems: vscode.CompletionItem[] = []

  Object.keys(componentMap).forEach((key) => {
    completionItems.push(
      new vscode.CompletionItem(`var-${key}`, vscode.CompletionItemKind.Field),
      new vscode.CompletionItem(bigCamelize(`var-${key}`), vscode.CompletionItemKind.Field)
    )
  })

  return completionItems
}

function resolveCompletionItem(item: vscode.CompletionItem) {
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
}

function provideHover(document: vscode.TextDocument, position: vscode.Position) {
  const line = document.lineAt(position)
  const linkComponents = line.text.match(LINK_RE) ?? []
  const bigCamelizeComponents = line.text.match(BIG_CAMELIZE_RE) ?? []
  const components = [...new Set([...linkComponents, ...bigCamelizeComponents.map(kebabCase)])]

  if (components.length) {
    const contents = components
      .filter((component) => componentMap[component])
      .map((component) => {
        const { site } = componentMap[component]

        return `\
[Varlet -> 查看${bigCamelize(component)}组件官方文档](${DOC}${site})\n
[Varlet-vue2 -> 查看${bigCamelize(component)}组件官方文档](${DOC_VUE2}${site})\n
[Varlet -> Watch ${bigCamelize(component)} component documentation](${EN_DOC}${site})\n
[Varlet-vue2 -> Watch ${bigCamelize(component)} component documentation](${EN_DOC_VUE2}${site})`
      })
    return new vscode.Hover(contents)
  }
}

function moveCursor(characterDelta: number) {
  const active = vscode.window.activeTextEditor!.selection.active!
  const position = active.translate({ characterDelta })
  vscode.window.activeTextEditor!.selection = new vscode.Selection(position, position)
}

export function activate(context: vscode.ExtensionContext) {
  vscode.commands.registerCommand('move-cursor', moveCursor)

  context.subscriptions.push(
    vscode.languages.registerHoverProvider(files, {
      provideHover,
    }),
    vscode.languages.registerCompletionItemProvider(files, {
      provideCompletionItems,
      resolveCompletionItem,
    })
  )
}

export function deactivate() {}
