import config from '@config'
import AppType from './appType'
import { Themes, StyleProvider } from '@varlet/ui'
import { onMounted, onUnmounted } from 'vue'

interface PCLocationInfo {
  language: string
  menuName: string
  hash: string
}

export type Theme = 'lightTheme' | 'darkTheme' | 'md3LightTheme' | 'md3DarkTheme'

export type StyleVars = Record<string, string>

export function getPCLocationInfo(): PCLocationInfo {
  const [, language, path] = window.location.hash.split('/')
  const [menuName, hash = ''] = path?.split('#') ?? []

  return {
    language,
    menuName,
    hash,
  }
}

function getHashSearch() {
  const { href } = window.location
  const hashSearch = href.slice(href.indexOf('?'))

  return new URLSearchParams(hashSearch)
}

export function getBrowserTheme(): Theme {
  const themeKey = config?.themeKey
  const defaultLightTheme = config?.defaultLightTheme
  const defaultDarkTheme = config?.defaultDarkTheme
  const storageTheme = window.localStorage.getItem(themeKey) as Theme

  if (!storageTheme) {
    const preferTheme = window.matchMedia?.('(prefers-color-scheme: dark)').matches
      ? defaultDarkTheme
      : defaultLightTheme
    window.localStorage.setItem(themeKey, preferTheme)

    return preferTheme
  }

  return storageTheme
}

export function watchLang(cb: (lang: string) => void, platform: 'pc' | 'mobile' = 'mobile') {
  const handleHashchange = () => {
    const language = platform === 'mobile' ? getHashSearch().get('language') ?? 'zh-CN' : getPCLocationInfo().language
    cb(language)
  }

  useRouteListener(handleHashchange)
  handleHashchange()
}

export function withSiteConfigNamespace(styleVars: Record<string, any>) {
  return Object.entries(styleVars).reduce((styleVars, [key, value]) => {
    styleVars[`--site-config-${key}`] = value as string
    return styleVars
  }, {} as StyleVars)
}

export function watchPlatform(cb: (platform: string) => void) {
  const handleHashchange = () => {
    const platform = getHashSearch().get('platform') ?? 'mobile'
    cb(platform)
  }

  useRouteListener(handleHashchange)
  handleHashchange()
}

export function useRouteListener(cb: () => void) {
  onMounted(() => {
    window.addEventListener('hashchange', cb)
    window.addEventListener('popstate', cb)
  })
  onUnmounted(() => {
    window.removeEventListener('hashchange', cb)
    window.removeEventListener('popstate', cb)
  })
}

const themeMap = {
  lightTheme: null,
  darkTheme: Themes.dark,
  md3LightTheme: Themes.md3Light,
  md3DarkTheme: Themes.md3Dark,
}

export function setTheme(theme: Theme) {
  const siteStyleVars = withSiteConfigNamespace(config[theme] || {})
  const styleVars = { ...siteStyleVars, ...(themeMap[theme] ?? {}) }
  StyleProvider(styleVars)
  setColorScheme(theme)
}

export function onThemeChange(cb?: (theme: Theme) => void) {
  watchTheme((theme) => {
    setTheme(theme)
    cb?.(theme)
  })
}

export function getSiteStyleVars(theme: Theme) {
  return withSiteConfigNamespace(config[theme] || {})
}

export function setColorScheme(theme: Theme) {
  document.documentElement.style.setProperty('color-scheme', theme.toLowerCase().includes('dark') ? 'dark' : 'light')
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

export function getMobileIndex() {
  const isCf = window.location.origin.includes('pages.dev')
  return isCf ? './mobile' : './mobile.html'
}

export { AppType, StyleProvider }
