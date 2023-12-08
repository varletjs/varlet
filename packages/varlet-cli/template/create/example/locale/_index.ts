import { Locale } from '@varlet/ui'
import zhCN from './zh-CN'
import enUS from './en-US'

const { add, use: exampleUse, pack, packs, merge } = Locale.useLocale()

const use = (lang: string) => {
  Locale.use(lang)
  exampleUse(lang)
}

Locale.add('zh-CN', Locale.zhCN)
Locale.add('en-US', Locale.enUS)
add('zh-CN', zhCN as any)
add('en-US', enUS as any)

export { add, pack, packs, merge, use }