import { ref } from 'vue'
import type { Ref } from 'vue'
import zhCN from './zh-CN'

export type Pack = {
  // Button component
  button: string

  // internal
  lang?: string
}

function useLocale<T = Pack>() {
  const packs: Record<string, Partial<T>> = {}
  const pack: Ref<Partial<T>> = ref({})

  const add = (lang: string, pack: Partial<T> & { lang?: string }) => {
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

  const merge = (lang: string, pack: Partial<T>) => {
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

export { packs, pack, add, use, merge, useLocale }

export const _LocaleComponent = { packs, pack, add, use, merge, useLocale }

export default {
  packs,
  pack,
  add,
  use,
  merge,
  useLocale,
}
