import enWebTypes from '@varlet/ui/highlight/web-types.en-US.json'
import zhWebTypes from '@varlet/ui/highlight/web-types.zh-CN.json'
import { workspace } from 'vscode'
import { LANGUAGE_TEXTS } from './constant'
import { HtmlTag } from './webTypes'

export function getLanguage() {
  const config = workspace.getConfiguration('varlet')
  return config.get('useChineseLanguage') ? 'zh-CN' : 'en-US'
}

export function getWebTypesTags(): HtmlTag[] {
  return (getLanguage() === 'en-US' ? enWebTypes : zhWebTypes).contributions.html.tags
}

export const t = (key: keyof (typeof LANGUAGE_TEXTS)['zh-CN']) => LANGUAGE_TEXTS[getLanguage()][key]
