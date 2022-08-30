import logger from '../shared/logger.js'
import execa from 'execa'
import { VITEST_CONFIG } from '../shared/constant'

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

  try {
    await execa('vitest', args, { stdin: 'inherit', stdout: 'inherit', stderr: 'inherit' })
  } catch (e: any) {
    logger.error(e.toString())
  }
}
