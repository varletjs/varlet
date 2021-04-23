import { runCLI } from 'jest'
import { CWD, JEST_CONFIG } from '../shared/constant'

export async function jest(cmd: { watch: boolean }, args: any) {
  const config = {
    rootDir: CWD,
    watch: cmd.watch,
    config: JEST_CONFIG,
    testMatch: Array.isArray(args) ? [`**/${args[0]}/__tests__/*.[jt]s`] : undefined
  }


  await runCLI(config as any, [CWD])
}
