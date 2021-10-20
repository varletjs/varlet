import chokidar, { FSWatcher } from 'chokidar'
import logger from '../shared/logger'
import { createServer, ViteDevServer } from 'vite'
import { ensureDirSync, pathExistsSync } from 'fs-extra'
import { SRC_DIR, VARLET_CONFIG } from '../shared/constant'
import { buildSiteEntry } from '../compiler/compileSiteEntry'
import { getDevConfig } from '../config/vite.config'
import { getVarletConfig } from '../config/varlet.config'
import { merge } from 'lodash'

let server: ViteDevServer
let watcher: FSWatcher

async function startServer(force: boolean | undefined) {
  const isRestart = Boolean(server)
  logger.info(`${isRestart ? 'Res' : 'S'}tarting server...`)

  // close all instance
  server && (await server.close())
  watcher && (await watcher.close())

  // build all config
  await buildSiteEntry()
  const varletConfig = getVarletConfig()
  const devConfig = getDevConfig(varletConfig)
  const inlineConfig = merge(devConfig, force ? { server: { force: true } } : {})

  // create all instance
  server = await createServer(inlineConfig)
  await server.listen()
  server.printUrls()

  if (pathExistsSync(VARLET_CONFIG)) {
    watcher = chokidar.watch(VARLET_CONFIG)
    watcher.on('change', () => startServer(force))
  }

  logger.info(`${isRestart ? 'Res' : 'S'}tart successfully!!!`)
}

export async function dev(cmd: { force?: boolean }) {
  process.env.NODE_ENV = 'development'

  ensureDirSync(SRC_DIR)

  await startServer(cmd.force)
}
