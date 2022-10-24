import config from '@config'
import AppType from './appType'
import { onMounted, onUnmounted } from 'vue'
import { kebabCase } from '@varlet/shared'
import { get } from 'lodash-es'

export type StyleVars = Record<string, string>

const mountedVarKeys: string[] = []

export function formatStyleVars(styleVars: StyleVars | null) {
  return Object.entries(styleVars ?? {}).reduce((styles, [key, value]) => {
    const cssVar = key.startsWith('--') ? key : `--${kebabCase(key)}`
    styles[cssVar] = value

    return styles
  }, {} as StyleVars)
}

export function StyleProvider(styleVars: StyleVars | null = {}) {
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

export function inIframe() {
  return window.self !== window.top
}

export interface Menu {
  doc: string
  text: Record<string, string>
  type: MenuTypes
}

export enum MenuTypes {
  TITLE = 1,
  COMPONENT = 2,
  DOCUMENTATION = 3,
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

export function withSiteConfigNamespace(styleVars: Record<string, any>) {
  return Object.entries(styleVars).reduce((styleVars, [key, value]) => {
    styleVars[`--site-config-${key}`] = value as string
    return styleVars
  }, {} as StyleVars)
}

export function setTheme(config: Record<string, any>, name: Theme) {
  const styleVars = withSiteConfigNamespace(get(config, name, {}))

  StyleProvider(styleVars)
}

export function utoa(data: string): string {
  return btoa(unescape(encodeURIComponent(data)))
}

export { AppType }

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
    const siteStyleVars = withSiteConfigNamespace(get(config, theme, {}))

    StyleProvider(theme === 'darkTheme' ? { ...siteStyleVars, ...dark } : siteStyleVars)

    cb?.(theme)
  })
}
