import fse from 'fs-extra'
import { mergeWith } from 'lodash-es'
import { VARLET_CONFIG, SITE_CONFIG } from '../shared/constant.js'
import { outputFileSyncOnChange } from '../shared/fsUtils.js'
import { isArray } from '@varlet/shared'
import { pathToFileURL } from 'url'
import { type VIConfig } from '@varlet/icon-builder'
import { type CopyOptions } from '@varlet/vite-plugins'
import { ProxyOptions } from 'vite'

const { pathExistsSync, statSync } = fse

export interface VarletConfigIcons extends VIConfig {
  /**
   * @default true
   * Whether to generate png
   */
  genPng?: boolean
}

export interface VarletConfigEsbuild {
  target?: string | string[]
}

export interface VarletConfigHtmlInjectPoint {
  position?: 'start' | 'end' | 'script-start'
  content?: string
}

export interface VarletConfigHtmlInject {
  head?: VarletConfigHtmlInjectPoint[]
  body?: VarletConfigHtmlInjectPoint[]
}

export interface VarletConfigPcMenu {
  text: Record<string, string>
  type: number
  doc?: string
}

export interface VarletConfigPcHeader {
  i18n?: Record<string, string>
  currentVersion?: string
  github?: string
  changelog?: string
  playground?: string
  themes?: Record<string, string>[]
  versions?: {
    name: string
    items?: { label?: string; link?: string }[]
  }[]
}

export interface VarletConfigMobileHeader {
  i18n?: Record<string, string>
  github?: string
  themes?: Record<string, string>[]
}

export interface VarletConfigPcIndexPage {
  description?: Record<string, string>
  started?: Record<string, string>
  viewOnGithub?: Record<string, string>
  features?: { name: Record<string, string>; description: Record<string, string> }[]
  teamMembers?: {
    label: Record<string, string>
    members: {
      name?: Record<string, string>
      title?: Record<string, string>
      description?: Record<string, string>
      avatar?: string
      github?: string
      twitter?: string
    }[]
  }
  contributors?: {
    label?: Record<string, string>
    link?: string
    image?: string
  }
  sponsors?: {
    label?: Record<string, string>
    link?: string
    image?: string
  }
  license?: Record<string, string>
  copyright?: Record<string, string>
}

export interface VarletConfigPc {
  title?: Record<string, string>
  description?: Record<string, string>
  keywords?: Record<string, string>
  redirect?: string
  clipboard?: Record<string, string>
  indexPage?: VarletConfigPcIndexPage
  header?: VarletConfigPcHeader
  menu?: VarletConfigPcMenu[]
  htmlInject?: VarletConfigHtmlInject
  fold?: {
    defaultFold?: boolean
    foldHeight?: number
  }
}

export interface VarletConfigMobile {
  title?: Record<string, string>
  description?: Record<string, string>
  keywords?: Record<string, string>
  redirect?: string
  header?: VarletConfigMobileHeader
  htmlInject?: VarletConfigHtmlInject
}

export interface VarletConfig {
  /**
   * @default `Varlet`
   * UI library name.
   */
  name?: string
  /**
   * @default `var`
   * Component name prefix
   */
  namespace?: string
  /**
   * @default `localhost`
   * Local dev server host
   */
  host?: string
  /**
   * @default `8080`
   * Local dev server port
   */
  port?: number
  proxy?: Record<string, string | ProxyOptions>
  title?: string
  logo?: string
  themeKey?: string
  defaultLanguage?: 'zh-CN' | 'en-US'
  alias?: Record<string, string>
  /**
   * @default `false`
   * Show mobile component on the right.
   */
  useMobile?: boolean
  lightTheme?: Record<string, string>
  darkTheme?: Record<string, string>
  md3LightTheme?: Record<string, string>
  md3DarkTheme?: Record<string, string>
  defaultLightTheme?: 'lightTheme' | 'md3LightTheme'
  defaultDarkTheme?: 'darkTheme' | 'md3DarkTheme'
  highlight?: { style: string }
  analysis?: { baidu: string }
  pc?: VarletConfigPc
  mobile?: VarletConfigMobile
  copy?: CopyOptions['paths']
  icons?: VarletConfigIcons
  esbuild?: VarletConfigEsbuild
  bundle?: {
    external?: string[]
    globals?: Record<string, string>
  }
  /**
   * @default `[]`
   * Directive folder name for component library.
   */
  directives?: string[]
}

export function defineConfig(config: VarletConfig) {
  return config
}

export function mergeStrategy(value: any, srcValue: any, key: string) {
  const keys = ['features', 'members']

  if (keys.includes(key) && isArray(srcValue)) {
    return srcValue
  }
}

export async function getVarletConfig(emit = false): Promise<Required<VarletConfig>> {
  const defaultConfig = (await import('./varlet.default.config.js')).default
  const config: any = pathExistsSync(VARLET_CONFIG)
    ? (await import(`${pathToFileURL(VARLET_CONFIG).href}?_t=${statSync(VARLET_CONFIG).mtimeMs}`)).default
    : {}
  const mergedConfig = mergeWith(defaultConfig, config, mergeStrategy)

  if (emit) {
    const source = JSON.stringify(mergedConfig, null, 2)
    outputFileSyncOnChange(SITE_CONFIG, source)
  }

  return mergedConfig
}
