import { x } from 'tinyexec'
import { VITEST_CONFIG } from '../shared/constant.js'

interface TestCommandOptions {
  watch?: boolean
  component?: string
  coverage?: boolean
}

export async function test({ component, watch, coverage }: TestCommandOptions) {
  process.env.NODE_ENV = 'test'

  const args = ['--config', VITEST_CONFIG]

  if (!watch) {
    args.unshift('run')
  }

  if (coverage) {
    args.push('--coverage')
  }

  if (component) {
    args.push('--dir', `src/${component.trim()}`)
  }

  await x('vitest', args, { nodeOptions: { stdio: 'inherit' }, throwOnError: true })
}
