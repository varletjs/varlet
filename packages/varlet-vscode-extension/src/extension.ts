import * as vscode from 'vscode'
import siteMap from './siteMap'

const DOC = 'https://varlet.gitee.io/varlet-ui/#/zh-CN'
const NAMESPACE_RE = /(?<=<var-)([\w-]+)(?=[^>]*\/?>)/g

function camelize(str: string): string {
  return str.replace(/-(\w)/g, (_: any, p: string) => p.toUpperCase())
}

function bigCamelize(str: string): string {
  return camelize(str).replace(str.charAt(0), str.charAt(0).toUpperCase())
}

function provideHover(document: vscode.TextDocument, position: vscode.Position) {
  const line = document.lineAt(position)
  const components = line.text.match(NAMESPACE_RE)

  if (Array.isArray(components)) {
    const contents = components
      .filter((component) => siteMap[component])
      .map((component) => `[查看${bigCamelize(component)}组件Varlet官方文档](${DOC}${siteMap[component]})`)
    return new vscode.Hover(contents)
  }
}

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerHoverProvider(['vue'], {
      provideHover,
    })
  )
}

export function deactivate() {}
