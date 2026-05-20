import { useLocale } from '../../../locale'
import enUS from './en-US'
import zhCN from './zh-CN'

const { add, use, t } = useLocale()

add('zh-CN', zhCN)
add('en-US', enUS)
use('zh-CN')

export { use, t }
