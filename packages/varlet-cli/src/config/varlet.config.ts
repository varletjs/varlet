import { pathExistsSync } from 'fs-extra'
import { VARLET_CONFIG } from '../shared/constant'

const defaultConfig = require('../../varlet.default.config.js')

export function getVarletConfig() {
  const config = (pathExistsSync(VARLET_CONFIG) && require(VARLET_CONFIG)) || {}
  return {
    ...defaultConfig,
    ...config,
  }
}
