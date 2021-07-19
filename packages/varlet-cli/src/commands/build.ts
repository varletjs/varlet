import webpack from 'webpack'
import logger from '../shared/logger'
import { buildMobileSiteRoutes, buildPcSiteRoutes } from '../compiler/compileRoutes'
import { getBuildConfig } from '../config/webpack.build.config'
import { ensureDirSync } from 'fs-extra'
import { SITE_MOBILE, SITE_PC, SRC_DIR } from '../shared/constant'
import { resolve } from 'path'

export async function build() {
  ensureDirSync(SRC_DIR)

  const [mobileRouteId, pcRouteId] = await Promise.all([buildMobileSiteRoutes(), buildPcSiteRoutes()])
  const config = getBuildConfig()
  config.resolve.alias['@pc-routes'] = resolve(SITE_PC, `./${pcRouteId}.routes.ts`)
  config.resolve.alias['@mobile-routes'] = resolve(SITE_MOBILE, `./${mobileRouteId}.routes.ts`)

  webpack(config, (err, stats) => {
    err && logger.error(err.toString())
    stats?.hasErrors() && logger.error(stats.toString())
  })
}
