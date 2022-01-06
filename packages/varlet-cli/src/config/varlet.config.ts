import { pathExistsSync } from 'fs-extra'
import { merge } from 'lodash'
import { VARLET_CONFIG, SITE_CONFIG } from '../shared/constant'
import { outputFileSyncOnChange } from '../shared/fsUtils'

export function getVarletConfig(emit = false): Record<string, any> {
  let config: any = {}

  if (pathExistsSync(VARLET_CONFIG)) {
    delete require.cache[require.resolve(VARLET_CONFIG)]
    config = require(VARLET_CONFIG)
  }
  delete require.cache[require.resolve('../../varlet.default.config.js')]
  const defaultConfig = require('../../varlet.default.config.js')

  const mergedConfig = merge(defaultConfig, config)

  if (emit) {
    const source = JSON.stringify(mergedConfig, null, 2)
    outputFileSyncOnChange(SITE_CONFIG, source)
  }

  return mergedConfig
}
