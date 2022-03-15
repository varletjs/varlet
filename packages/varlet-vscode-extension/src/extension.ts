import * as vscode from 'vscode'
import siteMap from './siteMap'

const DOC = 'https://varlet.gitee.io/varlet-ui/#/zh-CN'
const DOC_VUE2 = 'https://varlet.gitee.io/varlet-ui-vue2/#/zh-CN'
const EN_DOC = 'https://varlet.gitee.io/varlet-ui/#/en-US'
const EN_DOC_VUE2 = 'https://varlet.gitee.io/varlet-ui-vue2/#/en-US'

const LINK_RE = /(?<=<var-)([\w-]+)/g
const BIG_CAMELIZE_RE = /(?<=<Var)([\w-]+)/g

function parseToLink(str: string) {
  str = str.replace(str.charAt(0), str.charAt(0).toLowerCase())
  return str.replace(/([a-z])([A-Z])/g, (_, p1, p2) => p1 + '-' + p2.toLowerCase())
}

function camelize(str: string): string {
  return str.replace(/-(\w)/g, (_: any, p: string) => p.toUpperCase())
}

function bigCamelize(str: string): string {
  return camelize(str).replace(str.charAt(0), str.charAt(0).toUpperCase())
}

function provideHover(document: vscode.TextDocument, position: vscode.Position) {
  const line = document.lineAt(position)
  const linkComponents = line.text.match(LINK_RE) ?? []
  const bigCamelizeComponents = line.text.match(BIG_CAMELIZE_RE) ?? []
  const components = [...new Set([...linkComponents, ...bigCamelizeComponents.map(parseToLink)])]

  if (components.length) {
    const contents = components
      .filter((component) => siteMap[component])
      .map((component) => {
        return `\
[Varlet -> 查看${bigCamelize(component)}组件官方文档](${DOC}${siteMap[component]})\n
[Varlet-vue2 -> 查看${bigCamelize(component)}组件官方文档](${DOC_VUE2}${siteMap[component]})\n
[Varlet -> Watch ${bigCamelize(component)} component documentation](${EN_DOC}${siteMap[component]})\n
[Varlet-vue2 -> Watch ${bigCamelize(component)} component documentation](${EN_DOC_VUE2}${siteMap[component]})`
      })
    return new vscode.Hover(contents)
  }
}

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerHoverProvider(['vue', 'typescript', 'javascript', 'javascriptreact', 'typescriptreact'], {
      provideHover,
    })
  )
}

export function deactivate() {}
