#!/usr/bin/env node
import logger from './shared/logger'
import { Command } from 'commander'
import { dev } from './commands/dev'
import { build } from './commands/build'
import { compile } from './commands/compile'
import { create } from './commands/create'
import { jest } from './commands/jest'
import { lint } from './commands/lint'
import { gen } from './commands/gen'
import { preview } from './commands/preview'

const program = new Command()

program.version(`varlet-cli ${require('../package.json').version}`).usage('<command> [options]')

program
  .command('dev')
  .option('-f --force', 'Force dep pre-optimization regardless of whether deps have changed')
  .description('Run varlet development environment')
  .action(dev)

program.command('build').description('Build varlet site for production').action(build)

program.command('preview').description('Preview varlet site for production').action(preview)

program
  .command('compile')
  .description('Compile varlet components library code')
  .option('-nu, --noUmd', 'Do not compile umd target code')
  .action(compile)

program.command('lint').description('Lint code').action(lint)

program.command('create <name>').description('Create a component directory').action(create)

program
  .command('jest')
  .description('Run Jest in work directory')
  .option('-w, --watch', 'Watch files change auto jest')
  .option('-c, --component <componentName>', 'Test a specific component')
  .option('-cc --clearCache', 'Clear test cache')
  .action(jest)

program.command('gen <name>').description('Generate cli application').action(gen)

program.on('command:*', ([cmd]) => {
  program.outputHelp()
  logger.error(`\nUnknown command ${cmd}.\n`)
  process.exitCode = 1
})

program.parse()
