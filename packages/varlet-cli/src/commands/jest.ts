import { runCLI } from 'jest'
import { CWD, JEST_CONFIG } from '../shared/constant'
import logger from '../shared/logger'

export async function jest(cmd: { watch: boolean; component: string }) {
  const config = {
    rootDir: CWD,
    watch: cmd.watch,
    config: JEST_CONFIG,
    testMatch: cmd.component && [`**/${cmd.component}/__tests__/*.[jt]s`],
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
