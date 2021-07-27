import { pathExistsSync } from 'fs-extra'
import { merge } from 'lodash'
import { VARLET_CONFIG, SITE_CONFIG } from '../shared/constant'
import { outputFileSyncOnChange } from '../shared/fsUtils'

export function getVarletConfig() {
  let config = {}

  if (pathExistsSync(VARLET_CONFIG)) {
    delete require.cache[require.resolve(VARLET_CONFIG)]
    config = require(VARLET_CONFIG)
  }

  const mergedConfig = merge(require('../../varlet.default.config.js'), config)
  const source = JSON.stringify(mergedConfig, null, 2)
  outputFileSyncOnChange(SITE_CONFIG, source)

  return mergedConfig
}
