import address from 'address'
import logger from '../shared/logger'
import { createServer } from 'vite'
import { ensureDirSync } from 'fs-extra'
import { SRC_DIR } from '../shared/constant'
import { buildSiteEntry } from '../compiler/compileSiteEntry'
import { getDevConfig } from '../config/vite.config'
import { getVarletConfig } from '../config/varlet.config'
import { get, merge } from 'lodash'

export async function dev(cmd: { force?: boolean }) {
  process.env.NODE_ENV = 'development'

  ensureDirSync(SRC_DIR)
  await buildSiteEntry()

  const varletConfig = getVarletConfig()
  const devConfig = getDevConfig(varletConfig)
  const inlineConfig = merge(devConfig, cmd.force ? { server: { force: true } } : {})
  const server = await createServer(inlineConfig)

  await server.listen()

  const host = get(varletConfig, 'host')
  const port = get(varletConfig, 'port')
  const ipv4 = address.ip()

  logger.success(`\
Server running at
Local: http://${host}:${port}
Network: http://${ipv4}:${port}`)
}
