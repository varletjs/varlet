import { ref } from 'vue'
import type { Ref } from 'vue'
import zhCN from './zh-CN'

export function useLocale() {
  const packs: Record<string, any> = {}
  const pack: Ref<Record<string, any>> = ref({})

  const add = (lang: string, pack: Record<string, any>) => {
    pack.lang = lang
    packs[lang] = pack
  }

  const use = (lang: string) => {
    if (!packs[lang]) {
      console.warn(`The ${lang} does not exist. You can mount a language package using the add method`)
      return {}
    }

    pack.value = packs[lang]
  }

  const merge = (lang: string, pack: Record<string, any>) => {
    if (!packs[lang]) {
      console.warn(`The ${lang} does not exist. You can mount a language package using the add method`)
      return
    }

    packs[lang] = { ...packs[lang], ...pack }
    use(lang)
  }

  return {
    packs,
    pack,
    add,
    use,
    merge,
  }
}

const { packs, pack, add, use, merge } = useLocale()

add('zh-CN', zhCN)
use('zh-CN')

export { packs, pack, add, use, merge }

export const _LocaleComponent = { packs, pack, add, use, merge }

export default {
  packs,
  pack,
  add,
  use,
  merge,
}
