import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import logger from '../shared/logger'
import { getDevConfig } from '../config/webpack.dev.config'
import { getPort } from 'portfinder'
import { buildMobileSiteRoutes, buildPcSiteRoutes } from '../compiler/compileRoutes'
import { ensureDirSync } from 'fs-extra'
import { resolve } from 'path'
import { SRC_DIR, SITE_PC, SITE_MOBILE } from '../shared/constant'

export function runDevServer(port: number, config: any) {
  const { host } = config.devServer
  config.devServer.port = port
  const server = new WebpackDevServer(webpack(config), config.devServer)

  ;(server as any).showStatus = function () {}

  server.listen(port, host, (err?: Error) => {
    if (err) {
      logger.error(err.toString())
      return
    }

    logger.success(`Server running at http://${host}:${port}`)
  })
}

export async function dev() {
  ensureDirSync(SRC_DIR)

  const [mobileRouteId, pcRouteId] = await Promise.all([buildMobileSiteRoutes(), buildPcSiteRoutes()])
  const config = getDevConfig()
  config.resolve.alias['@pc-routes'] = resolve(SITE_PC, `./${pcRouteId}.routes.ts`)
  config.resolve.alias['@mobile-routes'] = resolve(SITE_MOBILE, `./${mobileRouteId}.routes.ts`)

  const { port } = config.devServer
  getPort(
    {
      port,
    },
    (err: Error, port: number) => {
      if (err) {
        logger.error(err.toString())
        return
      }
      runDevServer(port, config)
    }
  )
}
