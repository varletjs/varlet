import { onMounted, onUnmounted } from 'vue'
import { get } from 'lodash-es'
import { formatStyleVars } from './components/utils/elements'

export * from './components/utils/components'
export * from './components/utils/elements'
export * from './components/utils/shared'

export type StyleVars = Record<string, string>

const mountedVarKeys: string[] = []

function StyleProvider(styleVars: StyleVars | null = {}) {
  mountedVarKeys.forEach((key) => document.documentElement.style.removeProperty(key))
  mountedVarKeys.length = 0

  const styles: StyleVars = formatStyleVars(styleVars)
  Object.entries(styles).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value)
    mountedVarKeys.push(key)
  })
}

export function camelize(str: string): string {
  return str.replace(/-(\w)/g, (_: any, p: string) => p.toUpperCase())
}

export function bigCamelize(str: string): string {
  return camelize(str).replace(str.charAt(0), str.charAt(0).toUpperCase())
}

export interface PCLocationInfo {
  language: string
  menuName: string
}

export function getPCLocationInfo(): PCLocationInfo {
  const [, language, menuName] = window.location.hash.split('/')

  return {
    language,
    menuName,
  }
}

export function isPhone() {
  return /Android|webOS|iPhone|iPod|BlackBerry|Pad/i.test(navigator.userAgent)
}

export enum MenuTypes {
  TITLE = 1,
  COMPONENT = 2,
  DOCUMENTATION = 3,
}

export function inIframe() {
  return window.self !== window.top
}

export function removeEmpty(object: Record<string, string> = {}) {
  return Object.keys(object).reduce((record: Record<string, string>, key) => {
    const value = object[key]
    value && (record[key] = value)
    return record
  }, {})
}

export function getHashSearch() {
  const { href } = window.location
  const hashSearch = href.slice(href.indexOf('?'))

  return new URLSearchParams(hashSearch)
}

export function watchLang(cb: (lang: string) => void, platform: 'pc' | 'mobile' = 'mobile') {
  const handleHashchange = () => {
    const language = platform === 'mobile' ? getHashSearch().get('language') ?? 'zh-CN' : getPCLocationInfo().language

    cb(language)
  }

  addRouteListener(handleHashchange)

  handleHashchange()
}

export function watchPlatform(cb: (platform: string) => void) {
  const handleHashchange = () => {
    const platform = getHashSearch().get('platform') ?? 'mobile'
    cb(platform)
  }

  addRouteListener(handleHashchange)

  handleHashchange()
}

export function watchThemes(
  cb: (themes: 'themes' | 'darkThemes', from: 'pc' | 'mobile' | 'default') => void,
  shouldUnmount = true
) {
  const handleThemesChange = (event: MessageEvent) => {
    const { data } = event
    if (data.action === 'themesChange') {
      cb(data.data, data.from)
    }
  }

  window.addEventListener('message', handleThemesChange)

  if (shouldUnmount) {
    onUnmounted(() => {
      window.removeEventListener('message', handleThemesChange)
    })
  }

  cb(getBrowserThemes(), 'default')
}

export function addRouteListener(cb: () => void) {
  onMounted(() => {
    window.addEventListener('hashchange', cb)
    window.addEventListener('popstate', cb)
  })
  onUnmounted(() => {
    window.removeEventListener('hashchange', cb)
    window.removeEventListener('popstate', cb)
  })
}

export function setThemes(config: Record<string, any>, name: 'themes' | 'darkThemes') {
  const themes = get(config, name, {})
  const styleVars = Object.entries(themes).reduce((styleVars, [key, value]) => {
    styleVars[`--site-config-${key}`] = value as string
    return styleVars
  }, {} as StyleVars)

  StyleProvider(styleVars)
}

export function getBrowserThemes(themes = 'VARLET_THEMES'): 'darkThemes' | 'themes' {
  let currentThemes = window.localStorage.getItem(themes) as 'darkThemes' | 'themes'

  if (!currentThemes) {
    currentThemes = window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'darkThemes' : 'themes'
    window.localStorage.setItem(themes, currentThemes)
  }

  return currentThemes
}

export function watchDarkMode(dark: StyleVars, cb?: (themes: 'darkThemes' | 'themes') => void) {
  watchThemes((themes) => {
    StyleProvider(themes === 'darkThemes' ? dark : null)

    cb?.(themes)
  })
}

export function utoa(data: string): string {
  return btoa(unescape(encodeURIComponent(data)))
}
