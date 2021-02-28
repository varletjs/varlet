import _zhCN from '../../../locale/zh-CN'
import _enCN from '../../../locale/en-US'
import zhCN from './zh-CN'
import enUS from './en-US'
import { useLocale, add as _add, use as _use } from '../../../locale'

const { add, use: docUse, pack, packs, merge } = useLocale()

const use = (lang: string) => {
  _use(lang)
  docUse(lang)
}

export { add, pack, packs, merge, use }

// lib
_add('zh-CN', _zhCN)
_add('en-US', _enCN)
// example
add('zh-CN', zhCN)
add('en-US', enUS)
