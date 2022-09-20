import { onMounted, onUnmounted } from 'vue'
import { get } from 'lodash-es'
import { formatStyleVars } from './components/utils/elements'
import config from '@config'

export * from './components/utils/components'
export * from './components/utils/elements'

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

export function watchTheme(
  cb: (theme: Theme, from: 'pc' | 'mobile' | 'default' | 'playground') => void,
  shouldUnmount = true
) {
  const handleThemeChange = (event: MessageEvent) => {
    const { data } = event
    if (data.action === 'theme-change') {
      cb(data.data, data.from)
    }
  }

  window.addEventListener('message', handleThemeChange)

  if (shouldUnmount) {
    onUnmounted(() => {
      window.removeEventListener('message', handleThemeChange)
    })
  }

  cb(getBrowserTheme(), 'default')
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

export type Theme = 'lightTheme' | 'darkTheme'

export function setTheme(config: Record<string, any>, name: Theme) {
  const themeConfig = get(config, name, {})
  const styleVars = Object.entries(themeConfig).reduce((styleVars, [key, value]) => {
    styleVars[`--site-config-${key}`] = value as string
    return styleVars
  }, {} as StyleVars)

  StyleProvider(styleVars)
}

export function getBrowserTheme(): Theme {
  const themeKey = get(config, 'themeKey')
  const darkThemeConfig = get(config, 'darkTheme')

  if (!darkThemeConfig) {
    return 'lightTheme'
  }

  const storageTheme = window.localStorage.getItem(themeKey) as Theme

  if (!storageTheme) {
    const preferTheme = window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'darkTheme' : 'lightTheme'
    window.localStorage.setItem(themeKey, preferTheme)

    return preferTheme
  }

  return storageTheme
}

export function watchDarkMode(dark: StyleVars, cb?: (theme: Theme) => void) {
  watchTheme((theme) => {
    StyleProvider(theme === 'darkTheme' ? dark : null)

    cb?.(theme)
  })
}

export function utoa(data: string): string {
  return btoa(unescape(encodeURIComponent(data)))
}
