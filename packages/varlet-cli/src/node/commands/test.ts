import { x } from 'tinyexec'
import { VITEST_CONFIG } from '../shared/constant.js'

interface TestCommandOptions {
  watch?: boolean
  component?: string
  coverage?: boolean
}

export async function test({ component, watch, coverage }: TestCommandOptions) {
  process.env.NODE_ENV = 'test'

  const args: string[] = [watch ? 'watch' : 'run', '--config', VITEST_CONFIG]

  if (coverage) {
    args.push('--coverage')
  }

  if (component) {
    args.push('--dir', `src/${component.trim()}`)
  }

  await x('vp', ['test', ...args], { nodeOptions: { stdio: 'inherit' }, throwOnError: true })
}
