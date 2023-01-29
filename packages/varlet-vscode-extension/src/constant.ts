import { env } from 'vscode'

export const LANGUAGE_IDS = ['vue', 'typescript', 'javascript', 'javascriptreact', 'typescriptreact']
export const LINK_RE = /(?<=<var-)([\w-]+)/g
export const BIG_CAMELIZE_RE = /(?<=<Var)([\w-]+)/g
export const PROP_NAME_RE = /name=['"][\w-]*/

export function getSite() {
  return env.language === 'zh-cn'
    ? 'https://varlet.gitee.io/varlet-ui/#/zh-CN'
    : 'https://varlet.gitee.io/varlet-ui/#/en-US'
}
