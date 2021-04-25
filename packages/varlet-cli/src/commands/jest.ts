import { runCLI } from 'jest'
import { CWD, JEST_CONFIG } from '../shared/constant'

export async function jest(cmd: { watch: boolean; component: string }) {
  const config = {
    rootDir: CWD,
    watch: cmd.watch,
    config: JEST_CONFIG,
    testMatch: cmd.component && [`**/${cmd.component}/__tests__/*.[jt]s`],
  }

  await runCLI(config as any, [CWD])
}
