import { createServer } from 'vite'
import { ensureDirSync } from 'fs-extra'
import { SRC_DIR } from '../shared/constant'
import { buildSiteEntry } from '../compiler/compileSiteEntry'
import { getDevConfig } from '../config/vite.config'
import { getVarletConfig } from '../config/varlet.config'
import { merge } from 'lodash'

export async function dev(cmd: { force?: boolean }) {
  process.env.NODE_ENV = 'development'

  ensureDirSync(SRC_DIR)
  await buildSiteEntry()

  const devConfig = getDevConfig(getVarletConfig())
  const inlineConfig = merge(devConfig, cmd.force ? { server: { force: true } } : {})
  const server = await createServer(inlineConfig)
  await server.listen()
}
