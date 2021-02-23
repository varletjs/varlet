import { pathExistsSync, writeFileSync } from 'fs-extra'
import { SITE_CONFIG, VARLET_CONFIG } from '../shared/constant'
import { merge } from 'lodash'

export function getVarletConfig() {
  const config = (pathExistsSync(VARLET_CONFIG) && require(VARLET_CONFIG)) || {}
  const mergedConfig = merge(require('../../varlet.default.config.js'), config)

  writeFileSync(SITE_CONFIG, JSON.stringify(mergedConfig, null, 2))

  return mergedConfig
}

export const varletConfig: any = getVarletConfig()
