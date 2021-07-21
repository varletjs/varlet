import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import { getPort } from 'portfinder'
import { ensureDirSync } from 'fs-extra'
import { getDevConfig } from '../config/webpack.dev.config'
import { configId } from '../config/varlet.config'
import { buildMobileSiteRoutes, buildPcSiteRoutes } from '../compiler/compileRoutes'
import { SRC_DIR } from '../shared/constant'
import logger from '../shared/logger'
import { setAlias } from '../config/webpack.base.config'

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

  setAlias({ pcRouteId, mobileRouteId, configId })

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
