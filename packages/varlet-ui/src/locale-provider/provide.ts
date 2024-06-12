import { keyInProvides } from '@varlet/use'
import { computed, inject, provide, type ComputedRef } from 'vue'

export interface LocaleProvider {
  locale: ComputedRef<string>
}

export const LOCALE_PROVIDER_KEY = Symbol('LOCALE_PROVIDER_KEY')

export function provideLocaleProvider(localeProvider: LocaleProvider) {
  provide(LOCALE_PROVIDER_KEY, localeProvider)
}

export function injectLocaleProvider() {
  if (!keyInProvides(LOCALE_PROVIDER_KEY)) {
    return { locale: computed(() => undefined) }
  }

  return inject<LocaleProvider>(LOCALE_PROVIDER_KEY)!
}
