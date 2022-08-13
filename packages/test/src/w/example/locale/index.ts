  // lib
  import _zhCN from '../../../locale/zh-CN'
  import _enCN from '../../../locale/en-US'
  // mobile example doc
  import zhCN from './zh-CN'
  import enUS from './en-US'
  import { useLocale, add as _add, use as _use } from '../../../locale'

  const { add, use: exampleUse, pack, packs, merge } = useLocale()

  const use = (lang: string) => {
    _use(lang)
    exampleUse(lang)
  }

  export { add, pack, packs, merge, use }

  // lib
  _add('zh-CN', _zhCN)
  _add('en-US', _enCN)
  // mobile example doc
  add('zh-CN', zhCN as any)
  add('en-US', enUS as any)
  