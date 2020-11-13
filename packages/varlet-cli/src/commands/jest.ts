import { runCLI } from 'jest'
import { resolve } from 'path'
import { CWD, JEST_CONFIG, SRC_DIR } from '../shared/constant'
import logger from '../shared/logger'

export async function jest(cmd: { component?: string }) {
  const rootDir = cmd.component ? resolve(SRC_DIR, cmd.component) : CWD

  const config = {
    rootDir,
    config: JEST_CONFIG,
  }
  try {
    await runCLI(config as any, [CWD])
  } catch (e) {
    logger.error(e.toString())
  }
}
