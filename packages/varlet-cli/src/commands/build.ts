import webpack from 'webpack'
import logger from '../shared/logger'
import { buildMobileSiteRoutes, buildPcSiteRoutes } from '../compiler/compileRoutes'
import { getBuildConfig } from '../config/webpack.build.config'
import { VARLET_CONFIG } from '../shared/constant'
import { ensureConfigFile } from '../shared/fsUtils'

export async function build() {
  ensureConfigFile(VARLET_CONFIG)

  await Promise.all([buildMobileSiteRoutes(), buildPcSiteRoutes()])

  const config = getBuildConfig()

  webpack(config, (err, stats: any) => {
    err && logger.error(err.toString())
    stats?.hasErrors() && logger.error(stats)
  })
}
