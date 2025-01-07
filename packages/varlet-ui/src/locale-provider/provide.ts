import { inject, provide } from 'vue'
import { keyInProvides } from '@varlet/use'

export interface LocaleProvider {
  t: (id: string) => string | undefined
}

export const LOCALE_PROVIDER_KEY = Symbol('LOCALE_PROVIDER_KEY')

export function provideLocaleProvider(localeProvider: LocaleProvider) {
  provide(LOCALE_PROVIDER_KEY, localeProvider)
}

export function injectLocaleProvider() {
  if (!keyInProvides(LOCALE_PROVIDER_KEY)) {
    return { t: null }
  }

  return inject<LocaleProvider>(LOCALE_PROVIDER_KEY)!
}
