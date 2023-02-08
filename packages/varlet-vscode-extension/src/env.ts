import { workspace } from 'vscode'

export function getLanguage() {
  const config = workspace.getConfiguration('varlet')
  return config.get('useChineseLanguage') ? 'zh-CN' : 'en-US'
}
