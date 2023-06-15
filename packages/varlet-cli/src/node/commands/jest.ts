import logger from '../shared/logger.js'
import jestModule from 'jest'
import { CWD, JEST_CONFIG } from '../shared/constant.js'
import { buildSiteEntry } from '../compiler/compileSiteEntry.js'

export interface JestCommandOptions {
  watch?: boolean
  watchAll?: boolean
  component?: string
  clearCache?: boolean
}

const { runCLI } = jestModule

export async function jest(cmd: JestCommandOptions) {
  process.env.NODE_ENV = 'test'

  const config = {
    rootDir: CWD,
    watch: cmd.watch,
    watchAll: cmd.watchAll,
    clearCache: cmd.clearCache,
    config: JEST_CONFIG,
    testRegex: cmd.component && `${cmd.component}/__tests__/.*.spec.[jt]s?$`,
  }

  await buildSiteEntry()

  try {
    const response = await runCLI(config as any, [CWD])
    if (!response.results.success && !cmd.watch) {
      process.exit(1)
    }
  } catch (e: any) {
    logger.error(e.toString())
    process.exit(1)
  }
}
