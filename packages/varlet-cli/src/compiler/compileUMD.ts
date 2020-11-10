import { setProd } from '../shared/env'
import { getUmdConfig } from '../config/webpack.umd.config'
import webpack from 'webpack'
import logger from '../shared/logger'

export function compileUMD() {
  return new Promise((resolve, reject) => {
    setProd()
    const config = getUmdConfig()

    webpack(config, (err, stats) => {
      if (err) {
        logger.error(err.toString())
        reject()
      }
      if (stats.hasErrors()) {
        logger.error(stats)
        reject()
      }
      if (!err && !stats.hasErrors()) {
        resolve()
      }
    })
  })
}
