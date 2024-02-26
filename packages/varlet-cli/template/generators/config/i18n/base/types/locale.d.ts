import type { Ref } from 'vue'

export type Message = {
  button: string

  [key: PropertyKey]: any
}

interface Locale {
  messages: Record<string, Partial<Message>>
  currentMessage: Ref<Partial<Message>>
  add(lang: string, message: Partial<Message>): void
  use(lang: string): void
  merge(lang: string, message: Partial<Message>): void
  t(id: string): string
  useLocale<T = Message>(): {
    messages: Record<string, Partial<T>>
    currentMessage: Ref<Partial<T>>
    add(lang: string, message: Partial<T> & { lang?: string }): void
    use(lang: string): void
    merge(lang: string, message: Partial<T>): void
    t(id: string): string
  }
}

export const Locale: Locale

export class _LocaleComponent {}
