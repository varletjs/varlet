import webpack from 'webpack'
import logger from '../shared/logger'
import { ensureDirSync } from 'fs-extra'
import { buildMobileSiteRoutes, buildPcSiteRoutes } from '../compiler/compileRoutes'
import { getBuildConfig } from '../config/webpack.build.config'
import { SRC_DIR } from '../shared/constant'
import { getVarletConfig } from '../config/varlet.config'
import { setAlias } from '../config/webpack.base.config'

export async function build() {
  ensureDirSync(SRC_DIR)

  const config = getBuildConfig()
  const [mobileRouteId, pcRouteId] = await Promise.all([buildMobileSiteRoutes(), buildPcSiteRoutes()])
  const { configId } = getVarletConfig()

  setAlias(config, { pcRouteId, mobileRouteId, configId })

  webpack(config, (err, stats) => {
    err && logger.error(err.toString())
    stats?.hasErrors() && logger.error(stats.toString())
  })
}
