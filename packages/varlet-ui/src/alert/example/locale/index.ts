import { Locale } from '@varlet/ui'
import zhCN from './zh-CN'
import enUS from './en-US'

const { add, use: exampleUse, t, merge } = Locale.useLocale()

const use = (lang: string) => {
  Locale.use(lang)
  exampleUse(lang)
}

Locale.add('zh-CN', Locale.zhCN)
Locale.add('en-US', Locale.enUS)
add('zh-CN', zhCN)
add('en-US', enUS)

export { add, t, merge, use }
