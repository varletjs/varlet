import { merge } from 'lodash'
import { pathExistsSync } from 'fs-extra'
import { POSTCSS_CONFIG } from '../shared/constant'

export const defaultConfig = {
  plugins: [require.resolve('postcss-preset-env')],
}

export function getPostcssOptions() {
  let config: any = {}

  if (pathExistsSync(POSTCSS_CONFIG)) {
    delete require.cache[require.resolve(POSTCSS_CONFIG)]
    config = require(POSTCSS_CONFIG)
  }

  return merge(defaultConfig, config)
}
