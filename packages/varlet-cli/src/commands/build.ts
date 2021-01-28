import webpack, { Stats } from 'webpack'
import logger from '../shared/logger'
import { buildMobileSiteRoutes, buildPcSiteRoutes } from '../compiler/compileRoutes'
import { getBuildConfig } from '../config/webpack.build.config'
import { setProd } from '../shared/env'
import { VARLET_CONFIG } from '../shared/constant'
import { ensureConfigFile } from '../shared/fsUtils'

export async function build() {
  setProd()

  ensureConfigFile(VARLET_CONFIG)

  await Promise.all([buildMobileSiteRoutes(), buildPcSiteRoutes()])

  const config = getBuildConfig()

  webpack(config, (err, stats: Stats) => {
    err && logger.error(err.toString())
    stats?.hasErrors() && logger.error(stats)
  })
}
