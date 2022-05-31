import type { Ref } from 'vue'

export type Pack = {
  button: string
}

interface Locale {
  packs: Record<string, Partial<Pack>>
  pack: Ref<Partial<Pack>>
  add(lang: string, pack: Partial<Pack>): void
  use(lang: string): void
  merge(lang: string, pack: Partial<Pack>): void
  useLocale<T = Pack>(): {
    packs: Record<string, Partial<T>>
    pack: Ref<Partial<T>>
    add(lang: string, pack: Partial<T> & { lang?: string }): void
    use(lang: string): void
    merge(lang: string, pack: Partial<T>): void
  }
}

export const Locale: Locale

export class _LocaleComponent {}
