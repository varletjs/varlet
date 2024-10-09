import { keyInProvides } from '@varlet/use'
import { inject, provide } from 'vue'
import type { Highlighter } from './props'
import type { ComputedRef } from 'vue'

export interface HighlighterProvider {
  highlighter: ComputedRef<Highlighter | undefined>
  theme: ComputedRef<string | undefined>
}

export const HIGHLIGHTER_PROVIDER_KEY = Symbol('HIGHLIGHTER_PROVIDER_KEY')

export function provideHighlighterProvider(highlighterProvider: HighlighterProvider) {
  provide(HIGHLIGHTER_PROVIDER_KEY, highlighterProvider)
}

export function injectHighlighterProvider() {
  if (!keyInProvides(HIGHLIGHTER_PROVIDER_KEY)) {
    return { highlighter: null, theme: null }
  }

  return inject<HighlighterProvider>(HIGHLIGHTER_PROVIDER_KEY)!
}
