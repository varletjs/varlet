import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import logger from '../shared/logger'
import { getPort } from 'portfinder'
import { ensureDirSync } from 'fs-extra'
import { getDevConfig } from '../config/webpack.dev.config'
import { SRC_DIR } from '../shared/constant'

export async function runDevServer(port: number, config: any) {
  const { host } = config.devServer
  config.devServer.port = port

  const devServerOptions = {
    host: host === 'localhost' ? '0.0.0.0' : host,
    port,
  }

  const server = new WebpackDevServer(devServerOptions, webpack(config))

  await server.start()
}

export async function dev() {
  process.env.NODE_ENV = 'development'
  ensureDirSync(SRC_DIR)

  const config = getDevConfig()
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
