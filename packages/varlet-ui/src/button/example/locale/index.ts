import zhCN from './zh-CN'
import enUS from './en-US'
import { ref, Ref } from 'vue'

export const packs: Record<string, any> = {
  'zh-CN': zhCN,
  'en-US': enUS
}

export const pack: Ref<Record<string, any>> = ref({})

export function use(lang: string) {
  if (!packs[lang]) {
    return
  }

  pack.value = packs[lang]
}

use('zh-CN')
