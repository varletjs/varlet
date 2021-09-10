#!/usr/bin/env node
import { parse, command, version, outputHelp, on } from 'commander'
import { dev } from './commands/dev'
import { build } from './commands/build'
import { compile } from './commands/compile'
import { create } from './commands/create'
import { jest } from './commands/jest'
import { lint } from './commands/lint'
import { gen } from './commands/gen'
import logger from './shared/logger'

version(`varlet-cli ${require('../package.json').version}`).usage('<command> [options]')

command('dev').description('Run varlet development environment').action(dev)

command('build').description('Build varlet site for production').action(build)

command('compile')
  .description('Compile varlet components library code')
  .option('-nu, --noUmd', 'Do not compile umd target code')
  .action(compile)

command('lint').description('Lint code').action(lint)

command('create <name>').description('Create a component directory').action(create)

command('jest')
  .description('Run Jest in work directory')
  .option('-w, --watch', 'Watch files change auto jest')
  .option('-c, --component <componentName>', 'Test a specific component')
  .option('-cc --clearCache', 'Clear test cache')
  .action(jest)

command('gen <name>').description('Generate cli application').action(gen)

on('command:*', ([cmd]) => {
  outputHelp()
  logger.error(`\nUnknown command ${cmd}.\n`)
  process.exitCode = 1
})

parse()
