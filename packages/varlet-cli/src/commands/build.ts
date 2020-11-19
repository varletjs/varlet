import webpack from 'webpack'
import logger from '../shared/logger'
import { buildMobileSiteRoutes, buildPcSiteRoutes } from '../compiler/compileRoutes'
import { getBuildConfig } from '../config/webpack.build.config'
import { setProd } from '../shared/env'

export async function build() {
  try {
    setProd()

    await Promise.all([
      buildMobileSiteRoutes(),
      buildPcSiteRoutes()
    ])

    const config = getBuildConfig()

    webpack(config, (err, stats) => {
      err && logger.error(err.toString())
      stats.hasErrors() && logger.error(stats)
    })
  } catch (e) {
    logger.error(e)
  }
}
