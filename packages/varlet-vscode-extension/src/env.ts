import enWebTypes from '@varlet/ui/highlight/web-types.en-US.json'
import zhWebTypes from '@varlet/ui/highlight/web-types.zh-CN.json'
import { workspace } from 'vscode'
import { HtmlTag } from './webTypes'

export interface Config {
  language: 'zh-CN' | 'en-US'
  useVercelOrigin: boolean
}

export function getConfig(): Config {
  const config = workspace.getConfiguration('varlet')

  return {
    language: config.get('useChineseLanguage') ? 'zh-CN' : 'en-US',
    useVercelOrigin: config.get<boolean>('useVercelOrigin') ?? false,
  }
}

export function getWebTypesTags(): HtmlTag[] {
  return (getConfig().language === 'en-US' ? enWebTypes : zhWebTypes).contributions.html.tags
}

const defaultOrigin = 'https://varletjs.org'
const defaultPlayground = 'https://varletjs.org/playground'
const defaultIconsStatic = 'https://varletjs.org/icons/png'
const vercelOrigin = 'https://varlet-varletjs.vercel.app'
const vercelPlayground = 'https://varlet-ui-playground.vercel.app'
const vercelIconsStatic = 'https://varlet-varletjs.vercel.app/icons/png'

export function envs() {
  const { language, useVercelOrigin } = getConfig()
  const origin = useVercelOrigin ? vercelOrigin : defaultOrigin
  const documentationEn = `${origin}/#/en-US`
  const documentationZh = `${origin}/#/zh-CN`
  const playground = useVercelOrigin ? vercelPlayground : defaultPlayground
  const iconsStatic = useVercelOrigin ? vercelIconsStatic : defaultIconsStatic
  const texts = {
    'zh-CN': {
      documentation: documentationZh,
      linkWebviewText: '查看组件文档 (VSCode Webview)',
      linkText: '查看组件文档 (外部浏览器)',
      prop: '属性',
      event: '事件',
      slot: '插槽',
      description: '描述',
      default: '默认值',
    },
    'en-US': {
      documentation: documentationEn,
      linkWebviewText: 'Watch the documentation of the component (VSCode Webview)',
      linkText: 'Watch the documentation of the component (External Browser)',
      prop: 'Prop',
      event: 'Event',
      slot: 'Slot',
      description: 'Description',
      default: 'Default',
    },
  }

  const t = (key: keyof (typeof texts)['zh-CN']) => texts[language][key]

  return {
    t,
    language,
    useVercelOrigin,
    iconsStatic,
    playground,
  }
}
