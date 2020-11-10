#!/usr/bin/env node
import { parse, command } from 'commander'
import { dev } from './commands/dev'
import { build } from './commands/build'
import { compile } from './commands/compile'
import { create } from './commands/create'

command('dev')
  .description('Run varlet development environment')
  .action(dev)

command('build')
  .description('Build varlet site for production')
  .action(build)

command('compile')
  .description('Compile varlet components library code')
  .option('--watch', 'Watch files change auto compile')
  .action(compile)

command('create <name>')
  .description('Create a component directory')
  .action(create)

parse()
