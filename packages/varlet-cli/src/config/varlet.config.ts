import { pathExistsSync } from 'fs-extra'
import { merge } from 'lodash'
import { VARLET_CONFIG, SITE_CONFIG } from '../shared/constant'
import { outputFileSyncOnChange } from '../shared/fsUtils'

export function getVarletConfig() {
  let config: any = {}
  let defaultConfig: any = {}

  if (pathExistsSync(VARLET_CONFIG)) {
    delete require.cache[require.resolve(VARLET_CONFIG)]
    config = require(VARLET_CONFIG)
  }
  delete require.cache[require.resolve('../../varlet.default.config.js')]
  defaultConfig = require('../../varlet.default.config.js')

  const mergedConfig = merge(defaultConfig, config)
  const source = JSON.stringify(mergedConfig, null, 2)
  outputFileSyncOnChange(SITE_CONFIG, source)

  return mergedConfig
}
