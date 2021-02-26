import { ref, Ref } from 'vue'
import zhCN from './zh-CN'

export const packs: Record<string, any> = {}

export const pack: Ref<Record<string, any>> = ref({})

export function add(lang: string, pack: Record<string, any>) {
  packs[lang] = pack
}

export function use(lang: string) {
  if (!packs[lang]) {
    console.warn(`The ${lang} does not exist. You can mount a language package using the add method`)
    return
  }

  pack.value = packs[lang]
}

export function merge(lang: string, pack: Record<string, any>) {
  if (!packs[lang]) {
    console.warn(`The ${lang} does not exist. You can mount a language package using the add method`)
    return
  }

  packs[lang] = { ...packs[lang], ...pack }
  use(lang)
}

add('zh-CN', zhCN)
use('zh-CN')
