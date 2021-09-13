import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import logger from '../shared/logger'
import { getPort } from 'portfinder'
import { ensureDirSync } from 'fs-extra'
import { getDevConfig, getDevServerConfig } from '../config/webpack.dev.config'
import { SRC_DIR } from '../shared/constant'
import { getVarletConfig } from '../config/varlet.config'
import { get } from 'lodash'

export async function runDevServer(port: number, config: any) {
  const devServerConfig = getDevServerConfig()
  devServerConfig.port = port

  const server = new WebpackDevServer(devServerConfig, webpack(config))

  await server.start()
}

export async function dev() {
  process.env.NODE_ENV = 'development'
  ensureDirSync(SRC_DIR)

  const varletConfig = getVarletConfig()
  const config = getDevConfig()
  const port = get(varletConfig, 'port')

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
