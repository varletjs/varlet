import execa from 'execa'
import { VITEST_CONFIG } from '../shared/constant'
import { buildSiteEntry } from '../compiler/compileSiteEntry'

interface TestCommandOptions {
  watch?: boolean
  component?: string
  coverage?: boolean
}

export async function test({ component, watch, coverage }: TestCommandOptions) {
  process.env.NODE_ENV = 'test'

  // Test cases may contain documentation example code, and site dependencies need to build
  await buildSiteEntry()

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

  await execa('vitest', args, { stdin: 'inherit', stdout: 'inherit', stderr: 'inherit' })
}
