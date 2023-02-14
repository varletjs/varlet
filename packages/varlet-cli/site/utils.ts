import { get } from 'lodash-es'
import { StyleProvider, type Theme, withSiteConfigNamespace } from '@varlet/cli/client'

export interface Menu {
  doc: string
  text: Record<string, string>
  type: MenuTypes
  useRouteMobile: boolean
}

export enum MenuTypes {
  TITLE = 1,
  COMPONENT = 2,
  DOCUMENTATION = 3,
}

export function removeEmpty(object: Record<string, string> = {}) {
  return Object.keys(object).reduce((record: Record<string, string>, key) => {
    const value = object[key]
    value && (record[key] = value)
    return record
  }, {})
}

export function isPhone() {
  return /Android|webOS|iPhone|iPod|BlackBerry|Pad/i.test(navigator.userAgent)
}

export function inIframe() {
  return window.self !== window.top
}

export function setTheme(config: Record<string, any>, name: Theme) {
  const styleVars = withSiteConfigNamespace(get(config, name, {}))

  StyleProvider(styleVars)
}

export function utoa(data: string): string {
  return btoa(unescape(encodeURIComponent(data)))
}
