import { Ref } from 'vue'

interface Locale {
  packs: Record<string, any>
  pack: Ref<Record<string, any>>
  add(lang: string, pack: Record<string, any>): void
  use(lang: string): void
  merge(lang: string, pack: Record<string, any>): void
}

export const locale: Locale
