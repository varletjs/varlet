import { runCLI } from 'jest'
import { CWD, JEST_CONFIG } from '../shared/constant'

export async function jest(cmd: { watch: boolean }) {
  const config = {
    rootDir: CWD,
    watch: cmd.watch,
    config: JEST_CONFIG,
  }

  await runCLI(config as any, [CWD])
}
