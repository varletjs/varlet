import { pathExistsSync } from 'fs-extra'
import { mergeWith } from 'lodash'
import { VARLET_CONFIG, SITE_CONFIG } from '../shared/constant'
import { outputFileSyncOnChange } from '../shared/fsUtils'
import { isArray } from '@varlet/shared'

interface VarletConfig {
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
  logo?: string
  defaultLanguage?: 'zh-CN' | 'en-US'
  /**
   * @default `false`
   * Show mobile component on the right.
   */
  useMobile?: boolean
  lightTheme?: Record<string, string>
  darkTheme?: Record<string, string>
  highlight?: { style: string }
  analysis?: { baidu: string }
  pc?: Record<string, any>
  mobile?: Record<string, any>
  moduleCompatible?: Record<string, string>
}

export function defineConfig(conf: VarletConfig) {
  return conf
}

export function mergeStrategy(value: any, srcValue: any, key: string) {
  if (key === 'features' && isArray(srcValue)) {
    return srcValue
  }
}

export function getVarletConfig(emit = false): any {
  let config: any = {}

  if (pathExistsSync(VARLET_CONFIG)) {
    delete require.cache[require.resolve(VARLET_CONFIG)]
    config = require(VARLET_CONFIG)
  }
  delete require.cache[require.resolve('../../varlet.default.config.js')]
  const defaultConfig = require('../../varlet.default.config.js')

  const mergedConfig = mergeWith(defaultConfig, config, mergeStrategy)

  if (emit) {
    const source = JSON.stringify(mergedConfig, null, 2)
    outputFileSyncOnChange(SITE_CONFIG, source)
  }

  return mergedConfig
}
