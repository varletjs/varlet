import { pathExistsSync, writeFileSync } from 'fs-extra'
import hash from 'hash-sum'
import { resolve } from 'path'
import { merge } from 'lodash'
import { VARLET_CONFIG, SITE } from '../shared/constant'

export function getVarletConfig() {
  const config = (pathExistsSync(VARLET_CONFIG) && require(VARLET_CONFIG)) || {}
  const mergedConfig = merge(require('../../varlet.default.config.js'), config)
  const source = JSON.stringify(mergedConfig, null, 2)

  const configId = hash(source)
  const path = resolve(SITE, `./${configId}.site.config.json`)

  writeFileSync(path, source)

  return {
    varletConfig: mergedConfig,
    configId,
  }
}
