import logger from '../shared/logger'
import { runCLI } from 'jest'
import { CWD, JEST_CONFIG } from '../shared/constant'

export async function jest(cmd: { watch?: boolean; component?: string; clearCache?: boolean }) {
  process.env.NODE_ENV = 'test'

  const config = {
    rootDir: CWD,
    watch: cmd.watch,
    clearCache: cmd.clearCache,
    config: JEST_CONFIG,
    testRegex: cmd.component && `${cmd.component}/__tests__/.*.spec.[jt]s?$`,
  }

  try {
    const response = await runCLI(config as any, [CWD])
    if (!response.results.success && !cmd.watch) {
      process.exit(1)
    }
  } catch (e) {
    logger.error(e.toString())
    process.exit(1)
  }
}
