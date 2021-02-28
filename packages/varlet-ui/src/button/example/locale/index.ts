import zhCN from './zh-CN'
import enUS from './en-US'
import { useLocale } from '../../../locale'

const { add, use, pack, packs, merge } = useLocale()

export { add, use, pack, packs, merge }

add('zh-CN', zhCN)
add('en-US', enUS)
