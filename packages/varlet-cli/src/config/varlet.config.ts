import fse from 'fs-extra'
import { mergeWith } from 'lodash-es'
import { VARLET_CONFIG, SITE_CONFIG } from '../shared/constant.js'
import { outputFileSyncOnChange } from '../shared/fsUtils.js'
import { isArray } from '@varlet/shared'

const { pathExistsSync, statSync } = fse

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

export async function getVarletConfig(emit = false): Promise<Required<VarletConfig>> {
  // @ts-ignore
  const defaultConfig = (await import(`../../varlet.default.config.js`)).default
  const config: any = pathExistsSync(VARLET_CONFIG)
    ? (await import(`${VARLET_CONFIG}?_t=${statSync(VARLET_CONFIG).mtimeMs}`)).default
    : {}
  // @ts-ignore
  const mergedConfig = mergeWith(defaultConfig, config, mergeStrategy)

  if (emit) {
    const source = JSON.stringify(mergedConfig, null, 2)
    outputFileSyncOnChange(SITE_CONFIG, source)
  }

  return mergedConfig
}
