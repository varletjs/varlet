import chokidar, { FSWatcher } from 'chokidar'
import fse from 'fs-extra'
import logger from '../shared/logger.js'
import { createServer, ViteDevServer } from 'vite'
import { ES_DIR, SRC, SRC_DIR, VARLET_CONFIG } from '../shared/constant.js'
import { buildSiteEntry } from '../compiler/compileSiteEntry.js'
import { getDevConfig } from '../config/vite.config.js'
import { getVarletConfig, VarletConfig } from '../config/varlet.config.js'
import { get, merge } from 'lodash-es'
import { resolve } from 'path'
import { generateEsEntryTemplate, getScriptExtname } from '../compiler/compileScript.js'
import { getPublicDirs } from '../shared/fsUtils.js'
import { kebabCase } from '@varlet/shared'

const { ensureDirSync, pathExistsSync, readFileSync, outputFileSync, removeSync } = fse

let server: ViteDevServer
let watcher: FSWatcher

async function stub(varletConfig: Required<VarletConfig>) {
  const name = kebabCase(get(varletConfig, 'name'))
  // keep esm and css file for playground
  const esmFile = resolve(ES_DIR, `${name}.esm.js`)
  const cssFile = resolve(ES_DIR, `style.css`)
  const esmContent = pathExistsSync(esmFile) ? readFileSync(esmFile, 'utf-8') : ''
  const cssContent = pathExistsSync(cssFile) ? readFileSync(cssFile, 'utf-8') : ''

  removeSync(ES_DIR)

  const { indexTemplate } = generateEsEntryTemplate({
    publicDirs: await getPublicDirs(),
    root: `../${SRC}/`,
    scriptExtname: '',
  })

  outputFileSync(resolve(ES_DIR, `index${getScriptExtname()}`), indexTemplate)
  outputFileSync(resolve(ES_DIR, `style${getScriptExtname()}`), '')
  outputFileSync(esmFile, esmContent)
  outputFileSync(cssFile, cssContent)
}

async function startServer(options: DevCommandOptions) {
  const varletConfig = await getVarletConfig()
  const isRestart = Boolean(server)
  logger.info(`${isRestart ? 'Res' : 'S'}tarting server...`)

  // close all instance
  server && (await server.close())
  watcher && (await watcher.close())

  // stub library index
  await stub(varletConfig)

  // build all config
  await buildSiteEntry(options.draft ?? false)

  const devConfig = getDevConfig(varletConfig)
  const inlineConfig = merge(devConfig, options.force ? { optimizeDeps: { force: true } } : {})

  // create all instance
  server = await createServer(inlineConfig)
  await server.listen()
  server.printUrls()

  if (pathExistsSync(VARLET_CONFIG)) {
    watcher = chokidar.watch(VARLET_CONFIG)
    watcher.on('change', () => startServer(options))
  }

  logger.success(`\n${isRestart ? 'Res' : 'S'}tart successfully!!!`)

  if (options.draft) {
    logger.title('Server in draft mode!!!')
  }
}

interface DevCommandOptions {
  force?: boolean
  draft?: boolean
}

export async function dev(options: DevCommandOptions) {
  process.env.NODE_ENV = 'development'

  ensureDirSync(SRC_DIR)
  await startServer(options)
}
