import chokidar from 'chokidar'
import { createServer, ViteDevServer } from 'vite'
import { ensureDirSync, pathExistsSync } from 'fs-extra'
import { SRC_DIR, VARLET_CONFIG } from '../shared/constant'
import { buildSiteEntry } from '../compiler/compileSiteEntry'
import { getDevConfig } from '../config/vite.config'
import { getVarletConfig } from '../config/varlet.config'
import { merge } from 'lodash'
import logger from '../shared/logger'

let server: ViteDevServer | null

function watchConfigFile(force: boolean | undefined) {
  if (!pathExistsSync(VARLET_CONFIG)) {
    return
  }

  const watcher = chokidar.watch(VARLET_CONFIG)
  watcher.on('change', () => startServer(force))
}

async function startServer(force: boolean | undefined) {
  const isRestart = Boolean(server)
  logger.info(`${isRestart ? 'Res' : 'S'}tarting server...`)

  server && (await server.close())

  await buildSiteEntry()
  const varletConfig = getVarletConfig()
  const devConfig = getDevConfig(varletConfig)
  const inlineConfig = merge(devConfig, force ? { server: { force: true } } : {})
  server = await createServer(inlineConfig)
  await server.listen()
  server.printUrls()

  logger.info(`${isRestart ? 'Res' : 'S'}tart successfully!!!`)
}

export async function dev(cmd: { force?: boolean }) {
  process.env.NODE_ENV = 'development'

  ensureDirSync(SRC_DIR)

  await startServer(cmd.force)

  watchConfigFile(cmd.force)
}
