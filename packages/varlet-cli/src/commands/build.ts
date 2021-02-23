import webpack from 'webpack'
import logger from '../shared/logger'
import { buildMobileSiteRoutes, buildPcSiteRoutes } from '../compiler/compileRoutes'
import { getBuildConfig } from '../config/webpack.build.config'
import { ensureDirSync } from 'fs-extra'
import { SRC_DIR } from '../shared/constant'

export async function build() {
  ensureDirSync(SRC_DIR)

  await Promise.all([buildMobileSiteRoutes(), buildPcSiteRoutes()])

  const config = getBuildConfig()

  webpack(config, (err, stats) => {
    err && logger.error(err.toString())
    stats?.hasErrors() && logger.error(stats.toString())
  })
}
